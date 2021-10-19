import React from 'react';
import { useParams } from 'react-router';
import './Booking.css'
const Booking = () => {
    const {serviceId}=useParams();
    return (
        <div>
             <div className="style container">
            <h2 className="text-center ">this is booking{serviceId} </h2>
            <p className="">Health, according to the World Health Organization, is "a state of complete physical, mental and social well-being and not merely the absence of disease and infirmity."[1] A variety of definitions have been used for different purposes over time. Health can be promoted by encouraging healthful activities, such as regular physical exercise and adequate sleep,[2] and by reducing or avoiding unhealthful activities or situations, such as smoking or excessive stress. Some factors affecting health are due to individual choices, such as whether to engage in a high-risk behavior, while others are due to structural causes, such as whether the society is arranged in a way that makes it easier or harder for people to get necessary healthcare services. Still other factors are beyond both individual and group choices, such as genetic disorders.
            The meaning of health has evolved over time. In keeping with the biomedical perspective, early definitions of health focused on the theme of the body's ability to function; health was seen as a state of normal function that could be disrupted from time to time by disease. An example of such a definition of health is: "a state characterized by anatomic, physiologic, and psychological integrity; ability to perform personally valued family, work, and community roles; ability to deal with physical, biological, psychological, and social stress".[3] Then in 1948, in a radical departure from previous definitions, the World Health Organization (WHO) proposed a definition that aimed higher: linking health to well-being, in terms of "physical, mental, and social well-being, and not merely the absence of disease and infirmity".[4] Although this definition was welcomed by some as being innovative, it was also criticized for being vague and excessively broad and was not construed as measurable. 
            For a long time, it was set aside as an impractical ideal, with most discussions of health returning to the practicality of the biomedical model
            </p>

        </div>
        </div>
    );
};

export default Booking;