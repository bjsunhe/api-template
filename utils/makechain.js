import {OpenAIChat} from 'langchain/llms'
import {LLMChain,ChatVectorDBQAChain,loadQAChain} from 'langchain/chains'
import {PineconeStore} from 'langchain/vectorstores'
import {PromptTemplate} from 'langchain/prompts'
import {CallbackManager}  from 'langchain/callbacks'


const CONDENSE_PROMPT =
  PromptTemplate.fromTemplate(`鉴于以下对话和后续问题，将后续问题改写为独立问题。

  聊天记录：
{chat_history}
跟进输入: {question}
独立问题:`);


const QA_PROMPT = PromptTemplate.fromTemplate(
    `您是提供有用建议的 AI 助手。 您将获得一份长文档的以下提取部分和一个问题。 根据提供的上下文提供对话答案。 并将答案翻译成中文。
    您应该只提供引用以下上下文的超链接。 不要组成超链接。
    如果您在下面的上下文中找不到答案，只需说“嗯，我不确定。” 不要试图编造答案。
    如果问题与上下文无关，请礼貌地回答你只能回答与上下文相关的问题。
  
  问题: {question}
  =========
  {context}
  =========
  用 Markdown回答:`,
  );

  
export const makeChain=(vectorstore,onTokenStream)=>{
    const questionGenerator = new LLMChain({
        llm: new OpenAIChat({ temperature: 0 }),
        prompt: CONDENSE_PROMPT,
      });

      const docChain = loadQAChain(
        new OpenAIChat({
          temperature: 0,
          modelName: 'gpt-4-1106-preview', //change this to older versions (e.g. gpt-3.5-turbo) if you don't have access to gpt-4
          streaming: Boolean(onTokenStream),
          callbackManager: onTokenStream
            ? CallbackManager.fromHandlers({
                async handleLLMNewToken(token) {
                  onTokenStream(token);
                  console.log(token);
                },
              })
            : undefined,
        }),
        { prompt: QA_PROMPT },
      );


      return new ChatVectorDBQAChain({
        vectorstore,
        combineDocumentsChain: docChain,
        questionGeneratorChain: questionGenerator,
        returnSourceDocuments: true,
        k: 2, //number of source documents to return
      });

}



