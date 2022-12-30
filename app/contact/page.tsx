// Change it from Server Component to Client Component
"use client";
// Normal navigation
import Link from "next/link";
// Programatic navigation (only works in client components because window, hence use client above)
import { useRouter } from "next/navigation";

const Contact = () => {
  const post = { title: "Test" };
  const router = useRouter();

  return (
    <div>
      <h1>Contact</h1>
      <Link href='/'>home</Link>
      <Link href={`/blog/${post.title}`}>post</Link>
      <button type='button' onClick={() => router.push("/blog")}>
        Blog
      </button>
    </div>
  );
};

export default Contact;
