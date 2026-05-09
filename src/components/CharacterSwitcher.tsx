"use client";

import { useRef, useState } from "react";

const characters = [
  {
    name: "Sergei Dragunov",
    image: "/dragunov-profile.jpg",
    alt: "Sergei Dragunov character render",
    imageClassName: "h-full w-full object-cover object-center",
    sfx: "/dragunov-sfx.m4a",
  },
  {
    name: "Kazuya Mishima",
    image: "/kazuya-profile.png",
    alt: "Kazuya Mishima character render",
    imageClassName: "h-full w-full object-contain object-center",
    sfx: "/dorya.m4a",
  },
  {
    name: "Lee Chaolan",
    image: "/lee-profile.png",
    alt: "Lee Chaolan character render",
    imageClassName: "h-full w-full object-contain object-center",
    sfx: "/lee-excellent.mp3",
  },
  {
    name: "Steve Fox",
    image: "/steve-profile.png",
    alt: "Steve Fox character render",
    imageClassName: "h-full w-full object-contain object-center",
    sfx: "/steve-sfx.m4a",
  },
];

export function CharacterSwitcher() {
  const [activeIndex, setActiveIndex] = useState(0);
  const audioRefs = useRef<Record<string, HTMLAudioElement | null>>({});
  const activeCharacter = characters[activeIndex];

  function playCharacterSound(sfx: string) {
    const audio = audioRefs.current[sfx];

    if (!audio) {
      return;
    }

    audio.pause();
    audio.currentTime = 0;
    audio.volume = 0.72;
    void audio.play().catch(() => {});
  }

  function showNextCharacter() {
    const nextIndex = (activeIndex + 1) % characters.length;
    const nextCharacter = characters[nextIndex];

    playCharacterSound(nextCharacter.sfx);
    setActiveIndex(nextIndex);
  }

  return (
    <>
      {characters.map((character) => (
        <audio
          key={character.sfx}
          ref={(audio) => {
            audioRefs.current[character.sfx] = audio;
          }}
          src={character.sfx}
          preload="auto"
        />
      ))}
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
    </>
  );
}
