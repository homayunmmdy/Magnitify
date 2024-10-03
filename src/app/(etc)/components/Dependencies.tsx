import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import ScoialMediaSidebar from './ScoialMediaSidebar'

const Dependencies = () => {
    return (
        <>
            <ScoialMediaSidebar />
            <Analytics />
            <SpeedInsights />
        </>
    )
}

export default Dependencies