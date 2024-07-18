import React from 'react';

const About = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
                    About Us
                </h1>
                <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            Welcome to Our Blog
                        </h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">
                            Discover insights on AI, business, and self-improvement.
                        </p>
                    </div>
                    <div className="border-t border-gray-200">
                        <dl>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Our Mission
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    We aim to provide high-quality articles that inspire and inform our readers about the latest trends in artificial intelligence, business strategies, and self-improvement techniques.
                                </dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    What We Offer
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    Our blog features in-depth articles, how-to guides, and expert opinions on:
                                    <ul className="list-disc ml-5 mt-2">
                                        <li>Artificial Intelligence</li>
                                        <li>Business Strategies</li>
                                        <li>Self-Improvement</li>
                                    </ul>
                                </dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    About Magnitify
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    Our blog is part of the Magnitify platform, a comprehensive solution for content management and distribution. Visit <a href="https://magnitify.vercel.app" className="text-indigo-600 hover:text-indigo-900">Magnitify</a> to learn more.
                                </dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    About Nexca
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    Nexca is the administrator for managing posts and content on Magnitify. Nexca ensures that all content is curated and delivered to meet our high standards.
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;

