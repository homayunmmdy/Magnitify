import getPostMetadata from "../components/getPostMetadata";
import PostPreview from "../components/PostPreview";

const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div>
    <div className="grid grid-cols-1 md:grid md:grid-cols-2 lg:grid-cols-4 gap-5  mt-20">{postPreviews}</div>
    <div id="pos-article-display-94409"></div>
    <div id="pos-article-text-94402"></div>
    </div>
  );
};

export default HomePage;
