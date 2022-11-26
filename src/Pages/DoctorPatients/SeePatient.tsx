import { useParams } from 'react-router-dom';

export const SeePatient = () => {
    const { id } = useParams();
    return <>id:{id}</>;
};
