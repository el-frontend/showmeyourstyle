"use client";

import { useState } from "react";
import HeroActionButton from "./HeroActionButton";
import InteractiveImage from "./InteractiveImage";

const Hero = () => {
  const [effect, setEffect] = useState<string>("");

  const changeEffect = (style: string) => {
    setEffect(`gen_replace:from_person;to_${style};preserve-geometry_true`);
  };

  const randomSpookyStyle = () => {
    const spookyStyles = [
      "costume of a witch",
      "costume of a vampire",
      "costume of a ghost",
      "costume of a pirate",
      "costume of a werewolf",
      "costume of a skeleton",
      "costume of a clown",
      "costume of a superhero",
      "costume of a zombie",
      "costume of a mummy",
    ];
    const randomIndex = Math.floor(Math.random() * spookyStyles.length);
    return spookyStyles[randomIndex];
  };

  return (
    <div className="container mx-auto px-4 py-12 bg-primary relative rounded-3xl">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-3/5 p-12 flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Unleash Your Style with AI-Driven Fashion Creations
          </h1>
          <p className="text-gray-300 mb-8">
            Transform your wardrobe by uploading photos and letting AI design
            unique outfits tailored to your preferences.
          </p>
          <div className="mb-8">
            <p className="text-white font-semibold mb-6 text-xl">Try it now!! ✨</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <HeroActionButton
                text="Casual Style"
                onClick={() => changeEffect("Casual Style")}
              />
              <HeroActionButton
                text="Chic Style"
                onClick={() => changeEffect("Chic Style")}
              />
              <HeroActionButton
                text="Bohemian Style"
                onClick={() => changeEffect("Bohemian Style")}
              />
              <HeroActionButton
                text="Streetwear Style"
                onClick={() => changeEffect("Streetwear Style")}
              />
              <HeroActionButton
                text="Vintage Style"
                onClick={() => changeEffect("Vintage Style")}
              />
              <HeroActionButton
                text="Athleisure Style"
                onClick={() => changeEffect("Athleisure Style")}
              />
              <HeroActionButton
                text="Special Spooky Style"
                onClick={() =>
                  changeEffect(`${randomSpookyStyle()}`)
                }
              />
            </div>
          </div>
        </div>
        <div className="md:w-2/5">
          <div className="absolute bottom-0 right-0">
            <InteractiveImage
              src="sys-model-black-hair"
              width={650}
              height={650}
              alt="Hero Image"
              effect={effect}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
