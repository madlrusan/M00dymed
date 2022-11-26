import { Account, Client, Databases, Teams } from 'appwrite';

export const AppwritePatients = () => {
    const client = new Client()
        .setEndpoint('https://d4dd-93-122-160-173.eu.ngrok.io/v1')
        .setProject('6380ffa1e30188a45bab');

    const db = new Databases(client);
    const USERCONTENTID = '63812ca6dcd85979bef0';
    const DATABASEID = '63812c9edc4254a2b672';
    const getPatients = async (diagnostics: string, searchValue?: string) => {
        const userList = await db.listDocuments(DATABASEID, USERCONTENTID);
        return userList.documents.filter(
            (d) =>
                d.role === 0 &&
                (diagnostics === 'All' || d.diagnostics === diagnostics) &&
                (d.FirstName.includes(searchValue) || d.LastName.includes(searchValue)),
        );
    };
    return { getPatients };
};
