import Logo from "@/../public/static/Image/logo.png";
import Image from "next/image";
import Link from "next/link";

const LogoSec = ({ siteName }: { siteName: string }) => {
  return (
    <Link
      href="/"
      className="flex justify-center lg:justify-start"
      title={siteName}
    >
      <div className="flex flex-nowrap items-center gap-4">
        <Image
          src={Logo}
          width={60}
          height={60}
          title={siteName}
          alt={siteName}
        />
        <span className="text-2xl font-bold">{siteName}</span>
      </div>
    </Link>
  );
};

export default LogoSec;
