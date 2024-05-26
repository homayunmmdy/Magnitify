import Head from "next/head";

const Meta = ({ title, description, canonical }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    {canonical && <link rel="canonical" href={canonical} />}
  </Head>
);

export default Meta;
