import Link from "next/link";
import React from 'react'

export default function NotFound() {
  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="text-primary-600 mb-4 text-7xl font-extrabold tracking-tight text-indigo-700 lg:text-9xl">
            404
          </h1>
          <p className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Something Went Wrong
          </p>
          <p className="mb-4 text-lg font-light text-gray-500">
            Sorray we can&apos;t find this page but have very amazing articles in the
            home page
          </p>
          <Link
            href="/"
            className="bg-primary-600 hover:bg-primary-800 focus:ring-primary-300 my-4 inline-flex rounded-lg bg-indigo-700 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
          >
            Come Back to Home
          </Link>
        </div>
      </div>
    </>
  );
}
