import {useParams, Link} from "react-router-dom";
import {serviceList} from "../serviceList";

import Typography from "@mui/material/Typography";

import Breadcrumb from "../components/layout/Breadcrumb";

const ServicePage = () => {
    let {serviceId} = useParams()
    const foundService = serviceList.find(service => service.id === serviceId)

    const breadcrumbs = [
        <Link className={'breadcrumbLink'} key="1" to="/">{'Homepage'}</Link>,
        <Typography key="3" color="secondary" fontWeight={'bold'} fontSize={'20px'}>
            {foundService?.title}
        </Typography>];

    return (
        <>
            <Breadcrumb breadcrumbs={breadcrumbs} welcome_msg={''}/>
            <div>
                {foundService?.title}
            </div>
        </>
    );
}

export default ServicePage;