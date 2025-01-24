"use client";
import useViewCount from "@/app/store/useViewCount";
import SiteConfig from "@/config/site";
import Link from "next/link";
import { useEffect } from "react";

export default function About() {
  const { incrementPageView, getPageViewCount } = useViewCount();

  useEffect(() => {
    incrementPageView();
  }, [incrementPageView]);

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-4xl font-bold">
          About{" "}
          <Link
            href={SiteConfig.siteURL}
            className="text-indigo-700 underline"
            title={SiteConfig.name}
          >
            {SiteConfig.name}
          </Link>
        </h1>
        <p className="text-lg">
          <strong>You watched: {getPageViewCount()} pages</strong>
        </p>
        <p className="mt-4 text-lg">
          Welcome to{" "}
          <Link
            href={SiteConfig.siteURL}
            className="text-indigo-700 underline"
            title={SiteConfig.name}
          >
            {SiteConfig.name}
          </Link>
          ! Our platform allows you to create and manage your blog website
          effortlessly with our powerful admin panel.
        </p>
        <h2 className="mt-8 text-2xl font-semibold">Our Mission</h2>
        <p className="mt-4 text-lg">
          At{" "}
          <Link
            href={SiteConfig.siteURL}
            className="text-indigo-700 underline"
            title={SiteConfig.name}
          >
            {SiteConfig.name}
          </Link>
          , we aim to simplify website management, making it accessible to
          everyone, regardless of coding knowledge.
        </p>
        <h2 className="mt-8 text-2xl font-semibold">Technologies We Use</h2>
        <ul className="lzist-disc mt-4 list-inside text-lg">
          <li>Next.js for application structure and routing</li>
          <li>React for dynamic and interactive user interfaces</li>
          <li>MongoDB for data storage</li>
          <li>TailwindCSS and DaisyUI for styling and themes</li>
          <li>Clerk for secure authentication</li>
          <li>Vercel for hosting</li>
        </ul>
        <h2 className="mt-8 text-2xl font-semibold">Our Partners</h2>
        <p className="mt-4 text-lg">
          We collaborate with industry leaders like Next.js, React, and Vercel
          to provide you with the best tools and services.
        </p>
        <h2 className="mt-8 text-2xl font-semibold">Contact Us</h2>
        <p className="mt-4 text-lg">
          Got questions? We&apos;re here to help! Reach out to us anytime for support
          and inquiries.{" "}
          <Link
            className="text-indigo-700 underline"
            title="contacts"
            href="/contacts"
          >
            contacts
          </Link>
        </p>
      </div>
    </div>
  );
}
