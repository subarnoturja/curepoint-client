/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import starIcon from "../../assets/images/Star.png"
import { BsArrowRight } from "react-icons/bs";

const DoctorCard = ({ doctor }) => {

    const { name, avgRating, totalRating, photo, specialization, experiences } = doctor;

    return (
        <div className="p-3 lg:p-5">
            <div>
                <img src={photo} alt="" />
            </div>
            <h2 className="text-[18px] leading-[30px] md:text-[26px] md:leading-9 text-headingColor font-[500] mt-3 md:mt-5">
                {name}
            </h2>
            <div className="mt-2 md:mt-4 flex items-center justify-between">
                <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-2 md:py-2 md:px-5 text-[12px] leading-4 md:text-[16px] md:leading-7 font-semibold rounded">
                {specialization}
                </span>
                <div className="flex items-center gap-[6px]">
                    <span className="flex items-center gap-[6px] text-[14px] leading-6 md:text-[16px] md:leading-7 font-semibold text-headingColor"><img src={starIcon} alt="" />{avgRating}</span>
                    <span className="text-[14px] leading-6 md:text-[16px] md:leading-7 font-[400] text-textColor">({totalRating})</span>
                </div>
            </div>
            <div className="mt-[18px] md:mt-5 flex items-center justify-between">
                <div>
                    {/* <h3 className="text-[16px] leading-7 md:text-[18px] md:leading-[30px font-semibold text-headingColor">
                        +{totalPatients} patients
                    </h3> */}
                    <p className="text-[14px] leading-6 font-[300] text-textColor">
                        At {experiences && experiences[0] ?. hospital}
                    </p>
                </div>
                <Link to='/doctors' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                    <BsArrowRight className="group-hover:text-white w-6 h-5"></BsArrowRight>
                </Link>
            </div>
        </div>
    );
};

export default DoctorCard;