import type { ProjectMotifKey } from "@/data/projects";
import Image from "next/image";
import { PlanetMotif } from "./PlanetMotif";
import { Waveform } from "./Waveform";
import { CityscapeMotif } from "./CityscapeMotif";
import { MarkMotif } from "./MarkMotif";

export function ProjectMotif({
  motif,
  image,
  alt,
}: {
  motif: ProjectMotifKey;
  image?: string;
  alt?: string;
}) {
  if (image) {
    return (
      <div
        className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl p-4"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(124,102,255,.14), rgba(8,7,13,.95))",
        }}
      >
        <div className="relative size-full max-h-[85%] max-w-[85%]">
          <Image
            src={image}
            alt={alt || "Project logo"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.6)] transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>
    );
  }

  switch (motif) {
    case "orbit":
      return (
        <div
          className="flex h-full w-full items-center justify-center rounded-xl"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(124,102,255,.12), rgba(8,7,13,.9))",
          }}
        >
          <PlanetMotif size={90} />
        </div>
      );
    case "waveform":
      return (
        <div
          className="flex h-full w-full items-center rounded-xl px-5"
          style={{
            background:
              "linear-gradient(135deg, rgba(124,102,255,.14), rgba(8,7,13,.9))",
          }}
        >
          <Waveform />
        </div>
      );
    case "cityscape":
      return <CityscapeMotif />;
    case "portfolio":
      return <MarkMotif />;
  }
}
