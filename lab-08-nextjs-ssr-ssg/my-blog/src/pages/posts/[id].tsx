import type { GetStaticPaths, GetStaticProps } from "next";
import { getAllPosts, getAuthorById, getPostById } from "@/lib/api";
import type { Author, Post } from "@/types";

interface PostPageProps {
  post: Post;
  author: Pick<Author, "name" | "bio">;
}

export default function PostPage({ post, author }: PostPageProps) {
  return (
    <main>
      <article className="card">
        <h1>{post.title}</h1>
        <p>By {author.name}</p>
        <p>{post.content}</p>
        <p>{post.tags.map((tag) => `#${tag}`).join(" ")}</p>
      </article>
    </main>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();
  return {
    paths: posts.map((post) => ({ params: { id: post.id } })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<PostPageProps> = async ({ params }) => {
  const id = params?.id;
  if (typeof id !== "string") {
    return { notFound: true };
  }

  const post = await getPostById(id);
  if (!post) {
    return { notFound: true };
  }

  const author = await getAuthorById(post.author);
  if (!author) {
    return { notFound: true };
  }

  return {
    props: {
      post,
      author: { name: author.name, bio: author.bio },
    },
    revalidate: 60,
  };
};
