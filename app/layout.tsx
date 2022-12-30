// Layouts are components that wrap our pages. We can use them when we want to keep certain UI elements on page across routes. Things like a navigation bar, footer, layout, etc. We need to create a root layout. You must have a root layout when using the app directory.
// This is the root layout
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  );
}
