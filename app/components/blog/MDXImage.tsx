import Image from "next/image";

const MDXImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <Image
      className="my-4 md:my-6 border border-[#714F04] w-full h-full aspect-video"
      src={src}
      alt={alt}
      width={1200}
      height={550}
    />
  );
};

export default MDXImage;