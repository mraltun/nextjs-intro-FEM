// Adding a loading.tsx in the same directory as a server component page in the app directory that is fetching data will render that loading component while the data is being fetched. It's like Suspense boundry, which you can still do if you prefer or your server component isn't a page in the app directory.
const PostLoading = () => {
  return <div>...loading</div>;
};

export default PostLoading;
