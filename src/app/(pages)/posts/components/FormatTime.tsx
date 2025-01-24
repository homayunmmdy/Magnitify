import React from 'react'
interface FormatTimeProps {
    timestamp: string;
    options: Intl.DateTimeFormatOptions;
}

const FormatTime = ({ timestamp, options }: FormatTimeProps) => {
    const formatDate = (timestamp: string, options: Intl.DateTimeFormatOptions) => {
        const date = new Date(timestamp);
        return date.toLocaleString("en-GB", options);
    };

    return <>{formatDate(timestamp, options)}</>;
};



export default FormatTime