import { useParams } from 'react-router-dom';

export const EditPatient = () => {
    const { id } = useParams();
    return <>id:{id}</>;
};
