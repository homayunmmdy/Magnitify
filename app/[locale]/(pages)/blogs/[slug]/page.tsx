import { getCompiledMDX, getPostFilePaths } from "@/app/util/maxUtil";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const generateMetadata = async (props: PageProps): Promise<Metadata> => {
  const params = await props.params;
  try {
    const { frontmatter } = await getCompiledMDX(params.slug);

    return {
      title: frontmatter.title.slice(0, 65),
      description: frontmatter.description.slice(0, 155),
      keywords: frontmatter.categories,
      robots: "index, follow",
      openGraph: {
        title: frontmatter.title.slice(0, 155),
        description: frontmatter.description.slice(0, 155),
        type: "article",
        url: `/blogs/${params.slug}`,
        images: {
          url: frontmatter.imgURL,
          secureUrl: frontmatter.imgURL,
          width: 1200,
          height: 630,
          alt: `Preview image for ${frontmatter.title.slice(0, 30)}`,
        },
      },
      twitter: {
        card: "summary_large_image",
        // site: `@${SiteConfig.name}`,
        description: frontmatter.description.slice(0, 155),
        // creator: `@${SiteConfig.name}`,
        images: {
          url: frontmatter.imgURL,
          alt: `Preview image for ${frontmatter.title.slice(0, 30)}`,
        },
      },
    };
  } catch (e) {
    console.error(e)
    notFound();
  }
};

export const generateStaticParams = async () => {
  const postFilePaths = await getPostFilePaths();

  return postFilePaths.map((path) => ({
    slug: path.replace(/.mdx?$/, ""),
  }));
};

const getPostData = async (postSlug: string) => {
  try {
    return await getCompiledMDX(postSlug);
  } catch (e) {
    notFound();
  }
};

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const BlogPostPage = async (props: PageProps) => {
  const params = await props.params;
  const { content, frontmatter } = await getPostData(params.slug);
  const { title, date, imgURL, categories } = frontmatter;

  return (
    <>
      <div className="px-5 w-[98%] md:w-[92%] mx-auto mb-4 md:mb-5 lg:mb-9">
        <div className="px-5 w-[98%] md:w-[92%] mx-auto mb-4 md:mb-5 lg:mb-9">
          <p className="text-xl md:text-2xl font-light font-serif leading-9">
            {content}
          </p>
        </div>
      </div>
    </>
  );
};

export default BlogPostPage;
