import Head from "next/head";

type MetaProps = {
  title: string;
  name: string;
  content: string;
  key?: string;
};

const Metadata = ({ title, name, content, key }: MetaProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name={name} content={content} key={key} />
    </Head>
  );
};

export default Metadata;
