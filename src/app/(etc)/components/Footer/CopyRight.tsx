import Link from "next/link";

const CopyRight = ({siteName} : {siteName: string}) => {
  return (
    <div className="py-4">
      <div className="flex items-center justify-center">
        <span className="text-sm">
          تمام حقوق
          <Link href="/"> {siteName} </Link>
          محفوظ است کپی رایت@
          {new Date().getFullYear()}
        </span>
      </div>
    </div>
  );
};

export default CopyRight;
