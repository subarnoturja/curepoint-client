import { BASE_URL } from "../../config";
import useFetchData from "../../hooks/useFetchData";
import Error from "../Error/Error";
import Loading from "../Loader/Loading";
import DoctorCard from "./DoctorCard";

const DoctorList = () => {
  const { data: doctors, loading, error } = useFetchData(`${BASE_URL}/doctors`);

  return (
    <>
      {loading && <Loading />}
      {error && <Error />}

      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-[30px] mt-[30px] md:mt-[55px]">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor._id} doctor={doctor}></DoctorCard>
          ))}
        </div>
      )}
    </>
  );
};

export default DoctorList;