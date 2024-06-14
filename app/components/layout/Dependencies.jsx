import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import React from 'react'

const Dependencies = () => {
    return (
        <>
            <ReactQueryDevtools />
            <Analytics />
            <SpeedInsights />
        </>
    )
}

export default Dependencies