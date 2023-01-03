// This is like loading. If the server component errors out while rendering, the error page component will show instead. This is the same as wrapping a component in an Error Boundry. You can pass error object between components
const PostError = () => {
  return <div>error!</div>;
};

export default PostError;
