import React from "react";
import PostTable from "../../ui/admin/post/PostTable";
import AllPost from "../../ui/home/AllPost";

const Posts = async () => {
  const data = await AllPost();

  if (!data?.posts) {
    return <p>No posts.</p>;
  }

  const posts = data.posts;

  return (
    <div className="p-5">
      <div>
        {posts && (
          <div className="!z-5 relative flex flex-col rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none w-full p-4 h-full">
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th>تیتر</th>
                    <th  className="hidden lg:block">لید</th>
                    <th>ویرایش</th>
                    <th>حذف</th>
                  </tr>
                </thead>
                <tbody>
                  {posts.map((Post, _index) => (
                    <PostTable id={_index} key={_index} ticket={Post} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Posts;
