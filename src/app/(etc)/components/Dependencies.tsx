import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import ScoialMediaSidebar from './ScoialMediaSidebar'
import { GoogleAnalytics } from '@next/third-parties/google'

const Dependencies = () => {
    return (
        <>
            <ScoialMediaSidebar />
            <Analytics />
            <SpeedInsights />
            <GoogleAnalytics gaId="G-7ZRLWCZHL7" />
        </>
    )
}

export default Dependencies