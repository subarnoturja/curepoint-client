import { services } from "../../assets/data/services";
import ServiceCard from "./ServiceCard";

const ServiceList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-[30px]">
      {services.map((item, index) => (
        <ServiceCard key={index} item={item} index={index}></ServiceCard>
      ))}
    </div>
  );
};

export default ServiceList;
