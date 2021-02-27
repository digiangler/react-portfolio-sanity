import React from "react";

import image from "../images/bg.png";

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="Digi-Angler"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-20 px-8">
        <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">
          Full-Stack Engineer
        </h1>
      </section>
    </main>
  );
}

// 41:18
