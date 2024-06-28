import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import React from 'react'
import ScoialMediaSidebar from './ScoialMediaSidebar'

const Dependencies = () => {
    return (
        <>
            <ScoialMediaSidebar />
            <ReactQueryDevtools />
            <Analytics />
            <SpeedInsights />
        </>
    )
}

export default Dependencies