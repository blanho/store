import Link from "next/link";
import { Button } from "../ui/button";
import HeroCarousel from "./HeroCarousel";

const Hero = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-23 items-center">
      <div>
        <h1 className="max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl">
          We are chaning the way you shop online
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
          lorm ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <Button asChild size="lg" className="mt-10">
          <Link href="/products">Shop Now</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
};

export default Hero;
