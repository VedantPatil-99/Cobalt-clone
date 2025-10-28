import HeroImg from "@components/HeroImg";
import Explore from "@sections/Explore";
import Info from "@sections/Info";
import Landing from "@sections/Landing";
import Product from "../sections/Product";
import Footer from "../sections/Footer";
export default function Home() {
  return (
    <>
      <main>
        <Landing />
        <HeroImg />
        <Info />
        <Explore />
        <Product />
        <Footer />
      </main>
    </>
  );
}
