import { Client, Databases, Account } from 'appwrite';

const client = new Client();
client.setEndpoint('YOUR_APPWRITE_ENDPOINT') // Replace with your Appwrite endpoint
      .setProject('YOUR_PROJECT_ID');      // Replace with your Appwrite project ID

const databases = new Databases(client);
const account = new Account(client);

export { client, databases, account };
