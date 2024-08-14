"use client"
import { POST_API_URL } from '@/app/config/apiConstants';
import useGetSection from '@/app/hooks/useGetSection';
import Link from 'next/link';
import { GrLinkNext } from "react-icons/gr";
import InfluncerSecSkeleton from './InfluncerSecSkeleton';

const InfluncerSec = () => {
  const { data, loading } = useGetSection(POST_API_URL, -1, 4);

  if (loading) {
    return <InfluncerSecSkeleton />
  }
  
  return (
    <>
      {data?.map((post, _index) => (
        <Link href={`/Posts/${post._id}`} className="shadow-xl flex flex-col justify-end col-span-12 align-middle bg-no-repeat bg-cover lg:col-span-6 lg:h-auto"
          style={{ backgroundImage: `url(${post.imgurl})` }}
          key={post._id}
          title={post.title}
        >
          <div className="flex flex-col items-center p-4 text-center bg-[rgba(111,111,111,.6)] text-white">
            <h3 className="text-3xl font-bold">{post.title.slice(0,100)}</h3>
          </div>
        </Link>
      ))}
    </>
  )
}

export default InfluncerSec
