import HeroImg from "@components/HeroImg";
import Explore from "@sections/Explore";
import Info from "@sections/Info";
import Landing from "@sections/Landing";
export default function Home() {
  return (
    <>
      <main>
        <Landing />
        <HeroImg />
        <Info />
        <Explore />
      </main>
    </>
  );
}
