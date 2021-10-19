import { useParams } from 'react-router';
const Booking = () => {
    const {serviceId}=useParams();
    
    
    return (
        <div>
            <h2 className="text-center mt-5">this is booking{serviceId} </h2>
        </div>
    );
};

export default Booking;