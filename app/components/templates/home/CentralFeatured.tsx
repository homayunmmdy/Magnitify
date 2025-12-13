import Image from "next/image";
import Link from "next/link";

const CentralFeatured = () => {
  return (
    <div className="central-featured" aria-label="Top languages">
      <Image
        className="central-featured-logo"
        src="/images/central-featured-logo.png"
        width="300"
        height="283"
        alt=""
      />
      {topLanguages.map((item) => (
        <div
          className={`central-featured-lang ${item.position}`}
          lang={item.code}
          dir={item.direction}
          key={item.title}
        >
          <Link
            href={`/${item.code}/MainPage`}
            title={`${item.title} — AfghanWiki — The Free Encyclopedia`}
            className="link-box"
            data-slogan="The Free Encyclopedia"
          >
            <strong className="link ">{item.title}</strong>
            <small className="font-[13px]">
              {item.articles}+ <span>{item.posts}</span>
            </small>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CentralFeatured;

interface topLanguagesType {
  title: string;
  code: string;
  articles: number;
  direction: "ltr" | "rtl";
  position: string;
  posts: string;
}
const topLanguages: topLanguagesType[] = [
  {
    title: "English",
    code: "en",
    articles: 0,
    direction: "ltr",
    position: "top-0 right-[60%]",
    posts: "posts",
  },
  {
    title: "Deutsch",
    code: "de",
    articles: 0,
    direction: "ltr",
    position: "top-0 left-[60%]",
    posts: "posts",
  },
  {
    title: "دری",
    code: "fa",
    articles: 0,
    direction: "rtl",
    position: "top-[20%] right-[70%]",
    posts: "پست‌ها",
  },
  {
    title: "日本語",
    code: "ja",
    articles: 0,
    direction: "ltr",
    position: "top-[20%] left-[70%]",
    posts: "投稿",
  },
  {
    title: "Русский",
    code: "ru",
    articles: 0,
    direction: "ltr",
    position: "top-[40%] right-[72%]",
    posts: "посты",
  },
  {
    title: "Français",
    code: "fr",
    articles: 0,
    direction: "ltr",
    position: "top-[40%] left-[72%]",
    posts: "posts",
  },
  {
    title: "Español",
    code: "es",
    articles: 0,
    direction: "ltr",
    position: "top-[60%] right-[70%]",
    posts: "posts",
  },
  {
    title: "中文",
    code: "zh",
    articles: 0,
    direction: "ltr",
    position: "top-[60%] left-[70%]",
    posts: "帖子",
  },
  {
    title: "Italiano",
    code: "it",
    articles: 0,
    direction: "ltr",
    position: "top-[80%] right-[60%]",
    posts: "post",
  },
  {
    title: "پښتو",
    code: "ps",
    articles: 0,
    direction: "rtl",
    position: "top-[80%] left-[60%]",
    posts: "پوسټونه",
  },
];
