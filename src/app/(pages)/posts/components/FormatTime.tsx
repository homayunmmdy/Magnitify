import React from 'react'
//@ts-ignore
const FormatTime = ({ timestamp, options }) => {
    //@ts-ignore
    const formatDate = (timestamp, options) => {
        const date = new Date(timestamp);
        return date.toLocaleString("en-GB", options);
    };

    return <>{formatDate(timestamp, options)}</>;
};


export default FormatTime