import type { GetStaticProps } from "next";
import Link from "next/link";
import { getAllPosts, getAuthorById } from "@/lib/api";
import type { Post } from "@/types";

interface HomeProps {
  posts: Post[];
}

export default function Home({ posts }: HomeProps) {
  return (
    <main>
      <h1>My Blog (SSG + ISR)</h1>
      <p>Static page regenerated every 60 seconds.</p>
      {posts.map((post) => (
        <section key={post.id} className="card">
          <Link href={`/posts/${post.id}`}>
            <h2>{post.title}</h2>
          </Link>
          <p>
            By {post.author} | {post.readTime} min read
          </p>
          <p>{post.tags.map((tag) => `#${tag}`).join(" ")}</p>
        </section>
      ))}
    </main>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const posts = await getAllPosts();
  const hydratedPosts = await Promise.all(
    posts.map(async (post) => {
      const author = await getAuthorById(post.author);
      return { ...post, author: author?.name ?? "Unknown author" };
    }),
  );

  return {
    props: { posts: hydratedPosts },
    revalidate: 60,
  };
};
