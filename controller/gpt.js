const {Gpt} = require('../model')

const { OpenAIEmbeddings } =require('langchain/embeddings');
const { PineconeStore } = require('langchain/vectorstores');
const { makeChain } = require('../utils/makechain');
const { pinecone } = require('../utils/pinecone-client');
const { PINECONE_INDEX_NAME, PINECONE_NAME_SPACE } = require('../config/pinecone');

const addGpt=async (req,res,next)=>{

    let gptEntry={
        ...req.body
    }

    let gptData=new Gpt(gptEntry)

    await gptData.save()

    res.status(200).json({
        success:'success',
        gpt:gptData
    })
}





const findGpt=async (req,res,next)=>{
    const reqGpt=req.body.gpt
    let Gpts=await Gpt.find({
        
    })

    res.status(200).json({
        Gpts
    })
}

const chatGpt=async (req,res,next)=>{
    const { question, history } = req.body;
    const sanitizedQuestion = question.trim().replaceAll('\n', ' ');
    const index = pinecone.Index(PINECONE_INDEX_NAME);
    const vectorStore = await PineconeStore.fromExistingIndex(
        new OpenAIEmbeddings({}),
        {
          pineconeIndex: index,
          textKey: 'text',
          namespace: PINECONE_NAME_SPACE,
        },
      );
    res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache, no-transform',
    Connection: 'keep-alive',
    });

    const sendData = (data) => {
    res.write(`data: ${data}\n\n`);
    };
    sendData(JSON.stringify({ data: '' }));
    const chain = makeChain(vectorStore, (token) => {
        sendData(JSON.stringify({ data: token }));
      });
    try {
    //Ask a question
    const response = await chain.call({
        question: sanitizedQuestion,
        chat_history: history || [],
    });

    console.log('response', response);
    sendData(JSON.stringify({ sourceDocs: response.sourceDocuments }));
    } catch (error) {
    console.log('error', error);
    } finally {
    sendData('[DONE]');
    res.end();
    }
}

module.exports={
    addGpt,
    findGpt,
    chatGpt
}

