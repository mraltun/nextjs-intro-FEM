// It's required to have a root layout, but we can also have multiple nested layouts that render inside each other. You simply have to create a layout file in the route folder. By default, the layouts will nest. Remember to always pass children
const ContactLayout = ({ children }) => {
  return (
    <div>
      <div>ContactLayout</div>
      <div>{children}</div>
    </div>
  );
};

export default ContactLayout;
