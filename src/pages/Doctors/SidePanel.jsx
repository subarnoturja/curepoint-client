/* eslint-disable react/prop-types */
import { Bounce, toast } from "react-toastify";
import { BASE_URL, token } from "../../config";
import convertTime from "../../utils/convertTime";

const SidePanel = ({ doctorId, ticketPrice, timeSlots }) => {

    const bookingHandler = async() => {
        try {
            const res = await fetch(`${BASE_URL}/bookings/checkout-session/${doctorId}`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            const data = await res.json()
            
            if(!res.ok){
                throw new Error(data.message + "Please try again")
            }
            if(data.session.url){
                window.location.href = data.session.url
            }
        } catch (error) {
            toast.error(error.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
              });
        }
    }

    return (
        <div className="shadow-panelShadow p-3 md:p-6 rounded-lg">
            <div className="flex items-center justify-between">
                <p className="text__para mt-0 font-semibold">
                    Ticket Price
                </p>
                <span className="text-[16px] leading-7 md:text-[22px] md:leading-8 text-headingColor font-semibold">{ticketPrice} BDT</span>
            </div> 
            <div className="mt-[30px]">
                <p className="text__para mt-0 font-semibold text-headingColor">
                    Available Time Slot: 
                </p>
                <ul className="mt-3">
                    {timeSlots?.map((item, index) => (
                        <li key={index} className="flex items-center justify-between mb-2">
                            <p className="text-[15px] leading-6 text-textColor font-semibold">
                                {item.day.charAt(0).toUpperCase() + item.day.slice(1)}
                            </p>
                            <p className="text-[15px] leading-6 text-textColor font-semibold">
                                {convertTime(item.startingTime)} - {convertTime(item.endingTime)}
                            </p>
                        </li>
                    ))}
                    
                </ul>
            </div>
            <button onClick={bookingHandler} className="btn px-2 w-full rounded-lg">Book Appointment</button>
        </div>
    );
};

export default SidePanel;