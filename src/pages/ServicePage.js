import {useParams} from "react-router-dom";
import {serviceList} from "../serviceList";

const ServicePage = () => {
    let {serviceId} = useParams()
    const foundService = serviceList.find(service => service.id === serviceId)

    return (
        <div>
            {foundService?.title}
        </div>
    );
}

export default ServicePage;