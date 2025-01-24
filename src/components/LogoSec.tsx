import Logo from "../../public/static/Image/logo.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface Props {
  siteName: string;
  LogoOnlyInDesktop?: boolean;
}
const LogoSec: React.FC<Props> = ({ siteName, LogoOnlyInDesktop }: Props) => {
  return (
    <Link
      href="/"
      className="flex justify-center lg:justify-start"
      title={siteName}
    >
      {LogoOnlyInDesktop === true ? (
        <div className="flex flex-nowrap items-center gap-4 lg:flex">
          <Image
            src={Logo}
            width={60}
            height={60}
            title={siteName}
            alt={siteName}
            aria-label={`${siteName} logo`}
          />
          <span className="hidden text-2xl font-bold md:block">{siteName}</span>
        </div>
      ) : (
        <div className="flex flex-nowrap items-center gap-4 lg:flex">
          <Image
            src={Logo}
            width={60}
            height={60}
            title={siteName}
            alt={siteName}
            aria-label={`${siteName} logo`}
          />
          <span className="text-2xl font-bold">{siteName}</span>
        </div>
      )}
    </Link>
  );
};

export default LogoSec;
