import dotenv from "dotenv"
dotenv.config()
console.log(process.env)
if (!process.env.PINECONE_INDEX_NAME) {
    throw new Error('Missing Pinecone index name in .env file');
  }
  
  export const PINECONE_INDEX_NAME = process.env.PINECONE_INDEX_NAME ?? '';
  
  export const PINECONE_NAME_SPACE = 'markdown-expo-test'; //namespace is optional for your vectors

