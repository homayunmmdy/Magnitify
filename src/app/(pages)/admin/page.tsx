"use client";
import { Button, Input, Spinner } from "@/components";
import {
    POST_API_URL,
    SERVICES_API_URL,
} from "@/config/apiConstants";
import {
    ALL_POSTS_QUERY_KEY,
    SERVICES_QUERY_KEY,
} from "@/config/Constants";
import useFetch from "@/hooks/useFetch";
import {
    PostsCashType,
    ServicesCashType,
} from "@/types/CashTypes";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FiFilter, FiSearch } from "react-icons/fi";
import {ItemsTable, Pagination} from "@/app/(pages)/admin/components/elements";
import ErrorText from "@/app/(pages)/admin/components/elements/ErrorText";

const Posts = () => {
    const data = useFetch(ALL_POSTS_QUERY_KEY, POST_API_URL);
    const router = useRouter();
    const searchParams = useSearchParams();

    const [posts, setPosts] = useState(data?.data || []);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    // Get initial search params from URL
    const initialSearchQuery = searchParams.get("query") || "";
    const initialService = searchParams.get("service") || "";
    const initialSection = searchParams.get("section") || "";

    const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
    const [selectedService, setSelectedService] = useState(initialService);
    const [selectedSection, setSelectedSection] = useState(initialSection);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    // Extract unique services and sections from posts
    const { data: services, loading: serviceLoading } = useFetch(
        SERVICES_QUERY_KEY,
        SERVICES_API_URL
    );


    useEffect(() => {
        setPosts(data?.data || []);
    }, [data]);

    // Update URL with all filter parameters
    useEffect(() => {
        const handler = setTimeout(() => {
            const params = new URLSearchParams();
            if (searchQuery) params.set("query", searchQuery);
            if (selectedService) params.set("service", selectedService);
            if (selectedSection) params.set("section", selectedSection);

            router.push(`?${params.toString()}`);
        }, 400);

        return () => clearTimeout(handler);
    }, [searchQuery, selectedService, selectedSection, router]);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

    const filteredPosts = posts
        .sort(
            (a: { createdAt: string }, b: { createdAt: string }) =>
                new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
        .filter((post: PostsCashType) => {
            const matchesSearch = post.title
                .toLowerCase()
                .includes(searchQuery.toLowerCase());
            const matchesService =
                !selectedService || post.services === selectedService;

            return (
                matchesSearch && matchesService
            );
        });

    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    const handleSearch = (event: { target: { value: string } }) => {
        setSearchQuery(event.target.value);
        setCurrentPage(1);
    };

    const handleServiceChange = (event: { target: { value: string } }) => {
        setSelectedService(event.target.value);
        setCurrentPage(1);
    };

    const handleSectionChange = (event: { target: { value: string } }) => {
        setSelectedSection(event.target.value);
        setCurrentPage(1);
    };

    const clearFilters = () => {
        setSelectedService("");
        setSelectedSection("");
        setSearchQuery("");
        setCurrentPage(1);
    };

    if (!data?.data) {
        return <Spinner />;
    }

    return (
        <div className="p-5">
            <div className="space-y-4">
                <div className="flex flex-col gap-4 md:flex-row">
                    <div className="flex-1">
                        <Input
                            type="text"
                            placeholder="جستجو پست ها"
                            value={searchQuery}
                            onChange={handleSearch}
                            icon={
                                <FiSearch
                                    size={24}
                                    className="h-4 w-4 opacity-70"
                                    color="#b45309"
                                />
                            }
                            style="w-full"
                            color="input-warning"
                        />
                    </div>
                    <Button
                        color="btn-warning"
                        onClick={() => setIsFilterOpen(!isFilterOpen)}
                        className="btn-outline"
                    >
                        <FiFilter className="h-4 w-4" />
                        فیلتر
                    </Button>
                </div>

                {isFilterOpen && (
                    <div className="rounded-md border border-amber-600 p-4 shadow-sm">
                        <div>
                            <label className="mb-1 block text-sm font-medium">
                                سرویس
                            </label>
                            <select
                                value={selectedService}
                                onChange={handleServiceChange}
                                className="select select-bordered mb-2 w-full"
                            >
                                <option value="">همه سرویس ها</option>
                                {services.map((service: ServicesCashType) => (
                                    <option key={service._id} value={service.secid}>
                                        {service.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="mt-4 flex justify-end">
                            <Button onClick={clearFilters} color="btn-primary">
                                حذف فلیتر
                            </Button>
                        </div>
                    </div>
                )}

                {currentPosts.length > 0 ? (
                    <div className="shadow-3xl shadow-shadow-500 dark:!bg-navy-800 relative flex h-full w-full flex-col rounded-[20px] bg-clip-border p-4 dark:text-white dark:shadow-none">
                        <div className="overflow-x-auto">
                            <table className="table">
                                <thead>
                                <tr>
                                    <th>پست ها</th>
                                    <th>ویرایش</th>
                                    <th>حذف</th>
                                </tr>
                                </thead>
                                <tbody>
                                {currentPosts.map((post: PostsCashType) => (
                                    <ItemsTable post={post} baseURL="posts" key={post._id} />
                                ))}
                                </tbody>
                            </table>
                            <Pagination
                                postsPerPage={postsPerPage}
                                totalPosts={filteredPosts.length}
                                paginate={paginate}
                                currentPage={currentPage}
                            />
                        </div>
                    </div>
                ) : (
                    <ErrorText>No posts found.</ErrorText>
                )}
            </div>
        </div>
    );
};

export default Posts;
