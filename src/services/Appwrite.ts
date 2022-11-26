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
    const DIAGNOSISCONTENTID = '63822e8aa10d6b58e433';
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
    const getUser = async () => {
        try {
            const user = await account.get();
            return user;
        } catch (e) {}
    };
    const getRole = async () => {
        try {
            const user = await account.get();
            const userList = await db.listDocuments(DATABASEID, USERCONTENTID);
            return userList.documents.filter((d) => d.email.toLowerCase() === user.email.toLowerCase())[0].role;
        } catch (e) {}
    };
    const getPacientByEmail = async (email: string) => {
        try {
            const userList = await db.listDocuments(DATABASEID, USERCONTENTID);
            return userList.documents.filter((d) => d.id.toLowerCase() === email.toLowerCase())[0];
        } catch (e) {}
    };
    const getDiagnosis = async () => {
        const diagnosis = await db.listDocuments(DATABASEID, DIAGNOSISCONTENTID);
        try {
            const diagnosis = await db.listDocuments(DATABASEID, DIAGNOSISCONTENTID);
            return diagnosis;
        } catch (e) {}
    };
    const registerAdmin = async (
        email: string,
        password: string,
        firstName: string,
        lastName: string,
        phone: string,
    ) => {
        const id = ID.unique();
        await account.create(id, email, password, firstName + ' ' + lastName);
        await db.createDocument(DATABASEID, USERCONTENTID, id, {
            FirstName: firstName,
            LastName: lastName,
            phone: phone,
            email: email,
            PersonalId: password,
            role: 1,
        });
        await createEmailSession(email, password);
    };
    const registerUser = async (
        email: string,
        password: string,
        firstName: string,
        lastName: string,
        phone: string,
        diagnostic: string,
        diagnosticGrade: number,
    ) => {
        const id = ID.unique();
        await account.create(id, email, password, firstName + ' ' + lastName);
        await db.createDocument(DATABASEID, USERCONTENTID, id, {
            FirstName: firstName,
            LastName: lastName,
            phone: phone,
            email: email,
            PersonalId: password,
            diagnostics: diagnostic,
            diagnosticsGrade: diagnosticGrade,
            role: 0,
        });
    };
    const logout = async () => {
        await account.deleteSession('current');
    };

    const checkSession = () => {
        return account.getSession('current').then((r) => console.log(r));
    };

    return {
        registerAdmin,
        getTeams,
        loginUser,
        createEmailSession,
        checkSession,
        logout,
        getRole,
        getPacientByEmail,
        getUser,
        registerUser,
        getDiagnosis,
    };
};
