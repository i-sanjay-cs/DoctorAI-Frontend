import Feature from "../components/Feature";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";

export default function Home() {
  return (
    <>
      <SeoHead title='DoctorAI' />
      <Layout>
        <Hero />
        <Feature />
      
      </Layout>
    </>
  );
}
