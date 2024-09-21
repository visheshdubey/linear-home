import AmbientBackground from "@/components/AmbientBackground";
import { NavHeaderItems } from "@/content";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <div className=" max- w-full h-screen">
      <div className="fixed top-0 w-full header-top-blur-mask"></div>

      <AmbientBackground />
      <Navbar items={NavHeaderItems} />
    </div>
  );
}
