import type { GetStaticProps } from "next";

interface AboutProps {
  generatedAt: string;
}

export default function About({ generatedAt }: AboutProps) {
  return (
    <main>
      <h1>About (SSG + ISR)</h1>
      <p className="card">
        This page is pre-rendered at build time and then revalidated in the background.
      </p>
      <p>Generated at: {generatedAt}</p>
    </main>
  );
}

export const getStaticProps: GetStaticProps<AboutProps> = async () => {
  return {
    props: {
      generatedAt: new Date().toISOString(),
    },
    revalidate: 60,
  };
};
