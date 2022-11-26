import { Account, Client, Databases, ID } from 'appwrite';

export const AppWriteExercises = () => {
    const client = new Client()
        .setEndpoint('https://d4dd-93-122-160-173.eu.ngrok.io/v1')
        .setProject('6380ffa1e30188a45bab');

    const db = new Databases(client);
    const EXERCISESCONTENTID = '638282de5b21490f9db7';
    const DATABASEID = '63812c9edc4254a2b672';

    const getExercises = async (diagnostics: string) => {
        const exercises = await db.listDocuments(DATABASEID, EXERCISESCONTENTID);

        return exercises.documents.filter((d) => diagnostics === 'All' || d.Diagnostic === diagnostics);
    };

    const addExercise = async (title: string, content: string, media: string, diagnostic: string) => {
        const Id = ID.unique();
        await db.createDocument(DATABASEID, EXERCISESCONTENTID, Id, {
            Title: title,
            Content: content,
            Media: media,
            Diagnostic: diagnostic,
        });
    };
    return { getExercises, addExercise };
};
