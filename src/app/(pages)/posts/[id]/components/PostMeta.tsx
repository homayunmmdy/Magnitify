import SiteConfig from "@/config/site";
import { CategoryType } from "@/types/CashTypes";
import FormatTime from "../../components/FormatTime";

const PostMeta = ({ post }: { post: any }) => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const title = post.title.slice(0, 60);
  const description = post.description.slice(0, 150);
  const url = `${API_URL}/posts/${post._id}`;
  const lang = "en";
  const categories = post.categories?.map(
    (category: CategoryType) => category.name
  );
  const imageURL = !post.imgurl
    ? `${API_URL}/static/Image/logo.jpg`
    : post.imgurl;
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  const createTime = (
    <FormatTime
      timestamp={post.createdAt}
      options={options as Intl.DateTimeFormatOptions}
    />
  );
  const updateTime = (
    <FormatTime
      timestamp={post.createdAt}
      options={options as Intl.DateTimeFormatOptions}
    />
  );

  const createAt = createTime.props.timestamp;
  const updatedAt = createTime.props.timestamp;
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="robots"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      {post.categories?.length > 0 && (
        <meta name="keywords" content={categories} />
      )}
      <link rel="preload" href={imageURL} as="image" />
      <link rel="canonical" href={url} />
      <link rel="alternate" href={url} hrefLang={lang} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={SiteConfig.name} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content={imageURL} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:site" content={SiteConfig.name} />
      <meta name="twitter:creator" content={SiteConfig.name} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:player" content={SiteConfig.name} />
      <meta name="twitter:image" content={imageURL} />
      <meta content="900" name="twitter:image:width" />
      <meta content="900" name="twitter:image:height" />

      <meta property="article:author" content={SiteConfig.name} />
      <meta property="article:section" content={post.services} />
      {post.categories?.length > 0 && (
        <meta name="article:tag" content={categories} />
      )}
      <meta property="article:published_time" content={createAt} />
      <meta property="article:article:modified_time" content={updatedAt} />

      <meta name="thumbnail" content={imageURL} />
    </>
  );
};

export default PostMeta;
