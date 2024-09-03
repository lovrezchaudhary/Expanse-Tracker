import { Client, Databases, Account } from 'appwrite';

const client = new Client();
client.setEndpoint('https://cloud.appwrite.io/v1') 
      .setProject('66cf6be3002818670936');      

const databases = new Databases(client);
const account = new Account(client);

export { client, databases, account };
