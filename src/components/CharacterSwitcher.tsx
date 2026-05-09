"use client";

import { useState } from "react";

const characters = [
  {
    name: "Sergei Dragunov",
    image: "/dragunov-profile.jpg",
    alt: "Sergei Dragunov character render",
    imageClassName: "h-full w-full object-cover object-center",
  },
  {
    name: "Kazuya Mishima",
    image: "/kazuya-profile.png",
    alt: "Kazuya Mishima character render",
    imageClassName: "h-full w-full object-contain object-center",
  },
  {
    name: "Lee Chaolan",
    image: "/lee-profile.png",
    alt: "Lee Chaolan character render",
    imageClassName: "h-full w-full object-contain object-center",
  },
  {
    name: "Negan",
    image: "/negan-profile.png",
    alt: "Negan character render",
    imageClassName: "h-full w-full object-contain object-center",
  },
];

export function CharacterSwitcher() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCharacter = characters[activeIndex];

  function showNextCharacter() {
    setActiveIndex((currentIndex) => (currentIndex + 1) % characters.length);
  }

  return (
    <button
      type="button"
      onClick={showNextCharacter}
      className="dragunov-ring focus-ring group relative mx-auto grid aspect-square w-full max-w-[360px] cursor-pointer place-items-center rounded-full"
      aria-label={`Current character: ${activeCharacter.name}. Switch character.`}
    >
      <span className="relative z-10 h-[88%] w-[88%] overflow-hidden rounded-full border border-white/10 bg-[#05070C] shadow-[inset_0_0_36px_rgba(0,0,0,0.18)]">
        <img
          key={activeCharacter.image}
          src={activeCharacter.image}
          alt={activeCharacter.alt}
          className={`${activeCharacter.imageClassName} transition duration-500 group-hover:scale-105`}
        />
      </span>
    </button>
  );
}
