import { Client, Databases, ID } from 'appwrite';

export const AppwriteMedication = () => {
    const client = new Client()
        .setEndpoint('https://d4dd-93-122-160-173.eu.ngrok.io/v1')
        .setProject('6380ffa1e30188a45bab');

    const db = new Databases(client);
    const MEDICATIONCONTENTID = '6382b219ef1f153a2e54';
    const DATABASEID = '63812c9edc4254a2b672';
    const addMedication = async (
        name: string,
        everyday: boolean,
        quantity: number,
        hours: string,
        patientEmail: string,
    ) => {
        const Id = ID.unique();
        await db.createDocument(DATABASEID, MEDICATIONCONTENTID, Id, {
            Name: name,
            everyday: everyday,
            quantity: quantity,
            hours: hours,
            PatientEmail: patientEmail,
        });
    };
    const getMedicationForUser = async (email: string) => {
        const medications = await db.listDocuments(DATABASEID, MEDICATIONCONTENTID);

        return medications.documents.filter((medication) => medication?.PatientEmail === email);
    };
    const deleteMedication = async (id: string) => {
        const promise = await db.deleteDocument(DATABASEID, MEDICATIONCONTENTID, id);
    };
    return { addMedication, getMedicationForUser, deleteMedication };
};
