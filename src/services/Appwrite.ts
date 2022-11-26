import { Account, Client, Databases, ID, Teams } from 'appwrite';
export const Appwrite = () => {
    const client = new Client()
        .setEndpoint('https://d4dd-93-122-160-173.eu.ngrok.io/v1')
        .setProject('6380ffa1e30188a45bab');
    const account = new Account(client);
    const teams = new Teams(client);
    const db = new Databases(client);
    const USERCONTENTID = '63812ca6dcd85979bef0';
    const DATABASEID = '63812c9edc4254a2b672';
    const getTeams = () => {
        const promise = teams.list();
        promise.then((r) => console.log(r));
    };
    const loginUser = async (email: string, password: string) => {
        const result = await createEmailSession(email, password);
        console.log(result);
    };
    const createEmailSession = async (email: string, password: string) => {
        return account.createEmailSession(email, password);
    };

    const getRole = async () => {
        const user = await account.get();
        const userList = await db.listDocuments('63812c9edc4254a2b672', '63812ca6dcd85979bef0');
        return userList.documents.filter((d) => d.email.toLowerCase() === user.email.toLowerCase())[0].role;
    };
    const registerAdmin = async (email: string, password: string, firstName: string, lastName: string) => {
        const id = ID.unique();
        await account.create(id, email, password, firstName + ' ' + lastName);
        await db.createDocument(DATABASEID, USERCONTENTID, id, {
            FirstName: firstName,
            LastName: lastName,
            email: email,
            PersonalId: password,
            role: 1,
        });
        await createEmailSession(email, password);
    };
    const logout = async () => {
        await account.deleteSession('current');
    };

    const checkSession = () => {
        return account.getSession('current').then((r) => console.log(r));
    };
    return { registerAdmin, getTeams, loginUser, createEmailSession, checkSession, logout, getRole };
};
