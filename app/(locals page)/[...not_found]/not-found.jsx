import Link from 'next/link'

export default function NotFound() {
    return (

        <div className="bg-white">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center">
                    <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 text-indigo-700">404</h1>
                    <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">Something Went Wrong</p>
                    <p className="mb-4 text-lg font-light text-gray-500">Sorray we can't find this page but have very amazing articles in the home page</p>
                    <Link href="/" className="inline-flex bg-indigo-700 text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4">Come Back to Home</Link>
                </div>
            </div>
        </div>
    )
}