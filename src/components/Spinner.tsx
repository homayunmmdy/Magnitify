import React from 'react'

const Spinner = () => {
    return (
        <div data-testid='spinnerContainer' className="flex h-full w-full items-center justify-center">
            <span data-testid='spinner' className="loading loading-spinner loading-lg text-primary"></span>
        </div>
    )
}

export default Spinner