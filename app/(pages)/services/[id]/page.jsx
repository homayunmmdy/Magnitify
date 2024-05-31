"use client"
import LoadingPage from "@/app/components/layout/LoadingPage";
import ServiceTitle from "@/app/components/layout/ServiceTitle";
import axios from "axios";
import { notFound, usePathname } from "next/navigation";
import { useEffect, useState } from 'react';

const ServicesPage = () => {
    const pathname = usePathname();
    const id = pathname.slice(10);
    const [data, setData] = useState();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/api/Services`);
                setData(response.data.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    if (!data) {
        return <LoadingPage />;
    }
    const secids = data.map((item) => item.secid);
    if (secids.includes(parseInt(id))) {
        return (
            <>
                <ServiceTitle title="Services Comming soon" />
            </>
        )
    } else {
        return notFound();
    }

}

export default ServicesPage