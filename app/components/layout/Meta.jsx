import Head from "next/head";
import LogoImg from "@/public/static/Image/Magnitify.png"

const Meta = ({ title, description, canonical }) => (
  <Head>
    <title>{title}</title>
    <meta name="title" content={title} />
    <meta name="description" content={description} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={LogoImg} />
    {canonical && <link rel="canonical" href={canonical} />}
  </Head>
);

export default Meta;