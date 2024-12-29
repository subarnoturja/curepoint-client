import { doctors } from "../../assets/data/doctors"
import DoctorCard from "./DoctorCard";

const DoctorList = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-[30px] mt-[30px] md:mt-[55px]">
            {doctors.map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor}></DoctorCard>
            ))}
        </div>
    );
};

export default DoctorList;