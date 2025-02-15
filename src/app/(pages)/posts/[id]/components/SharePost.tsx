
import { SharePostType, SocialMediaType } from "@/types/entities";
import Link from "next/link";
import { FaMediumM, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const SharePost = ({ POSTURL, title }: SharePostType) => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const encodedUrl = encodeURIComponent(`${API_URL}${POSTURL}`);
 
  // Ensure title is at most 170 characters
  const maxTitleLength = 170;
  const trimmedTitle = title.length > maxTitleLength ? title.slice(0, maxTitleLength) + "..." : title;
  const encodedTitle = encodeURIComponent(trimmedTitle);

  const twitterText = `${trimmedTitle}  

برای دیدن نسخه کامل مقاله روی لینک زیر کلیک کنید ⬇️`;

  const socialMedia: SocialMediaType[] = [
    {
      id: 1,
      name: "Linkedin",
      icon: <FaLinkedinIn size={20} />,
      link: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
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
      link: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodeURIComponent(twitterText)}`,
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
    <div className="my-3 flex flex-wrap items-center gap-1">
      <span className="pr-2 font-bold">اشتراک گذاری :</span>
      <ul className="flex items-center gap-2">
        {socialMedia.map((media: SocialMediaType) => (
          <li className="flex items-center gap-2" key={media.id}>
            <Link
              className="rounded-full border border-amber-600 p-2 text-amber-600 transition-all ease-in-out hover:bg-amber-600 hover:text-white"
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
  );
};

export default SharePost;
