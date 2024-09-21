import AmbientBackground from "@/components/AmbientBackground";
import Hero from "./_comps/Hero";
import { NavHeaderItems } from "@/content";
import Navbar from "@/components/navbar/Navbar";
import { promises as fs } from "fs";

export default async function Home() {
  const heroProductSvgContent = await getLargeSvgContent('/src/app/hero_product_preview.svg');
  return (
    <div className="w-full h-screen">

      <AmbientBackground />
      <Navbar items={NavHeaderItems} />
      <Hero svg={heroProductSvgContent}></Hero>
    </div>
  );
}

async function getLargeSvgContent(svgPath: string) {
  const path = process.cwd() + svgPath
  return await fs.readFile(path, "utf8");
}
