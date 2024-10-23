// @ts-ignore
const RenderTags = ({ post }) => {
  return (
    <>
      <ul className="flex gap-2 flex-wrap my-2">
        {/* @ts-ignore */}
        {post.categories?.map((category) => (
          <li key={category._id} className="badge badge-primary badge-outline">
            {category.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default RenderTags;
