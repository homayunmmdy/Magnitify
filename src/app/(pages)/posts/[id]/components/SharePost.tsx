import { SharePostType, SocialMediaType } from "@/types/entities";
import Link from "next/link";
import { FaMediumM, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const SharePost = ({ POSTURL, title, description }: SharePostType) => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const encodedUrl = encodeURIComponent(`${API_URL}${POSTURL}`);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);

  const socialMedia: SocialMediaType[] = [
    {
      id: 1,
      name: "Linkedin",
      icon: <FaLinkedinIn size={20} />,
      link: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}&summary=${encodedDescription}`,
    },
    {
      id: 2,
      name: "Medium",
      icon: <FaMediumM size={20} />,
      link: `https://medium.com/new-story?url=${encodedUrl}`,
    },
    {
      id: 3,
      name: "X",
      icon: <FaXTwitter size={20} />,
      link: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    },
    {
      id: 4,
      name: "Telegram",
      icon: <FaTelegramPlane size={20} />,
      link: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
    },
    {
      id: 5,
      name: "Whatsapp",
      icon: <FaWhatsapp size={20} />,
      link: `https://api.whatsapp.com/send?text=${encodedTitle} ${encodedUrl}`,
    },
  ];
  return (
    <>
      <div className="my-3 flex items-center gap-1">
        <span className="pr-2 font-bold">Share :</span>
        <ul className="flex items-center gap-2">
          {socialMedia.map((media: SocialMediaType) => (
            <li className="flex items-center gap-2" key={media.id}>
              <Link
                className="rounded-full border border-indigo-600 p-2 text-indigo-600 transition-all ease-in-out hover:bg-indigo-600 hover:text-white"
                target="_blank"
                rel="nofollow"
                href={media.link}
                title={media.name}
              >
                {media.icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SharePost;
