import { GoogleAnalytics } from '@next/third-parties/google'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import React from 'react'

const Dependencies = () => {
    return (
        <>
            <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICES} />
            <ReactQueryDevtools />
            <Analytics />
            <SpeedInsights />
        </>
    )
}

export default Dependencies