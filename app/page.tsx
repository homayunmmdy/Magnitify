import getPostMetadata from "../components/getPostMetadata";
import PostPreview from "../components/PostPreview";

const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-20">{postPreviews}</div>
    <div id="pos-article-text-94402"></div>
    </>
  );
};

export default HomePage;
