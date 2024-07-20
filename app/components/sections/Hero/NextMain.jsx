import Image from 'next/image'
import Link from 'next/link'

const NextMain = ({ post }) => {
    return (
        <>
            <Link href={`/Posts/${post._id}`} className='grid grid-cols-12  gap-4 md:gap-8 items-center mb-4'>
                <div className='col-span-12 md:col-span-6 xl:col-span-4'>
                    <div>
                        <Image src={post.imgurl}
                            alt={post.title.slice(0,60)}
                            width={270}
                            height={150}
                            className="w-full h-full aspect-video object-cover rounded-md"
                            blurDataURL={post.imgurl}
                            placeholder="blur"
                            layout="responsive"
                            loading="lazy"
                        />
                    </div>
                </div>
                <div className='col-span-12 md:col-span-6 xl:col-span-8'>
                    <h2 className='font-light my-2 text-lg leading-relaxed'>
                        {post.title.slice(0,75)}...
                    </h2>
                </div>
            </Link>
        </>
    )
}

export default NextMain
