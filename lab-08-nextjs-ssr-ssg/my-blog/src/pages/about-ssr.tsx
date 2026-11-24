import type { GetServerSideProps } from "next";

interface AboutSsrProps {
  generatedAt: string;
}

export default function AboutSsr({ generatedAt }: AboutSsrProps) {
  return (
    <main>
      <h1>About (SSR)</h1>
      <p className="card">This page is rendered on every request for fresh server data.</p>
      <p>Generated at: {generatedAt}</p>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps<AboutSsrProps> = async () => {
  return {
    props: {
      generatedAt: new Date().toISOString(),
    },
  };
};
