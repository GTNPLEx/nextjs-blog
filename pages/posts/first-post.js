
import Link from 'next/link'
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../../components/Layout';
import Todo from '../../components/Todo';


const Avatar = () => (
  <Image
    src="/images/profile.png" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="Patricia"
  />
);

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>MoonBow ❤️ </title>
      </Head>
      <h1>First Post </h1>
      <button className='button'>    
        <Link href="/">←home </Link>  
      </button>
      <h1>Todo ✅</h1>
      <Todo text="Comments Here" /> 
      <Todo text="Learn Next.js" />
    </Layout>
    
      
  
  );
}
