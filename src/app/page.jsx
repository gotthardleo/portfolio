
import * as pages from "@/components/Pages";

const Home = () => {
  return (
    <>
      <pages.Header />
      <main className="-z-50">
        <pages.Hero />
        <pages.About />
        <pages.Projects />
        <pages.Contact />
      </main>
      <pages.Footer />
    </>
  );
}

export default Home;
