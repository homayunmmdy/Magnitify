import Link from "next/link";
import React from "react";
import { PiSealCheckFill } from "react-icons/pi";

interface Props {
  master: boolean;
}

const NexcaMark: React.FC<Props> = ({ master }: Props) => {
  return master ? (
    <Link href="/demo" title="This post write by Nexca">
      <PiSealCheckFill data-testid="Icon" size={32} color="#6366F1" />
    </Link>
  ) : null;
};

export default NexcaMark;
