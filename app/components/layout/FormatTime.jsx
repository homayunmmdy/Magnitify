import React from 'react'

const FormatTime = ({ timestamp, options }) => {
    const formatDate = (timestamp, options) => {
        const date = new Date(timestamp);
        return date.toLocaleString("en-GB", options);
    };

    return <>{formatDate(timestamp, options)}</>;
};


export default FormatTime