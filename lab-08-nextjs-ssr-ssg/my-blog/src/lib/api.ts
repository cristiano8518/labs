import type { Author, Notification, Post, User } from "@/types";

const authors: Author[] = [
  { id: "1", name: "John Doe", bio: "Tech writer", avatar: "/avatars/john.jpg" },
  { id: "2", name: "Jane Smith", bio: "React expert", avatar: "/avatars/jane.jpg" },
];

const posts: Post[] = [
  {
    id: "1",
    title: "Getting Started with Next.js",
    content:
      "Next.js is a React framework that enables server-side rendering and static generation.",
    author: "1",
    date: "2026-03-01",
    tags: ["nextjs", "react"],
    readTime: 5,
  },
  {
    id: "2",
    title: "SSR vs SSG: Which One to Choose?",
    content:
      "SSR gives fresh data on each request, while SSG provides great performance for stable content.",
    author: "2",
    date: "2026-03-02",
    tags: ["ssr", "ssg", "isr"],
    readTime: 6,
  },
  {
    id: "3",
    title: "Using ISR in Real Projects",
    content:
      "ISR lets you keep static performance while updating pages in the background at an interval.",
    author: "1",
    date: "2026-03-03",
    tags: ["isr", "nextjs"],
    readTime: 4,
  },
];

export async function getAllPosts(): Promise<Post[]> {
  return posts;
}

export async function getPostById(id: string): Promise<Post | undefined> {
  return posts.find((post) => post.id === id);
}

export async function getAuthorById(id: string): Promise<Author | undefined> {
  return authors.find((author) => author.id === id);
}

export function getCurrentUser(): User {
  return {
    id: "user-123",
    name: "Demo User",
    email: "demo@example.com",
    avatar: "/avatars/demo.jpg",
    role: "user",
  };
}

export async function getUserNotifications(userId: string): Promise<Notification[]> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return [
    {
      id: "1",
      type: "info",
      message: `Welcome to the dashboard, ${userId}!`,
      read: false,
      createdAt: "2026-03-01",
    },
    {
      id: "2",
      type: "success",
      message: "Your profile was updated successfully",
      read: true,
      createdAt: "2026-02-28",
    },
  ];
}

export async function getUserAnalytics(userId: string): Promise<{
  pageViews: number;
  sessions: number;
  bounceRate: number;
}> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  const seed = userId.length;
  return {
    pageViews: 8000 + seed * 10,
    sessions: 900 + seed * 3,
    bounceRate: 37.5,
  };
}
