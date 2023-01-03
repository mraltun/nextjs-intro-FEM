import delay from "../../../lib/delay";

const getData = async (slug) => {
  const post = await delay(2000);
  return post;
};

const BlogPost = async ({ params }) => {
  const { slug } = params;
  const post = await getData(slug);
  // Dynamic routing. This will show up after type anything "/blog/" (blog/post). We are using "catch all routes" (...)  (blog/post/1)
  return <div>{post.slug}</div>;
};

export default BlogPost;
