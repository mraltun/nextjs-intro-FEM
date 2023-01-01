// const getData = async (slug) => {
//   const post = await getDataFromCMS(slug);
//   return post;
// };

const BlogPost = async ({ params }) => {
  // const { slug } = params;
  // const post = await getData(slug);
  // Dynamic routing. This will show up after type anything "/blog/" (blog/post). We are using "catch all routes" (...)  (blog/post/1)
  return <div>Post</div>;
};

export default BlogPost;
