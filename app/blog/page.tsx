// If you have a dynamic route segment where the params are static, like a blog post, we can use this function.
const generateStaticParams = () => {
  return [{ slug: "learn-to-code" }, { slug: "angular-vs-react" }];
};

const Blog = () => {
  return <div>Blog</div>;
};

export default Blog;
