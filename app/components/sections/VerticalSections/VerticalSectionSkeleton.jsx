
const VerticalSectionSkeleton = () => {
    return (
        <div className=" mx-auto py-6">
            <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-5">
                <div className="skeleton w-full h-[450px] rounded-md"></div>
                <div className="skeleton w-full h-[450px] rounded-md"></div>
                <div className="skeleton w-full h-[450px] rounded-md"></div>
                <div className="skeleton w-full h-[450px] rounded-md"></div>
            </div>
        </div>
    )
}

export default VerticalSectionSkeleton