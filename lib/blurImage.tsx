import Image from "next/image";
import { useState } from "react";

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export function BlurImage({
  imageSrc,
  alt,
  height,
  width,
  customHeight,
  bg,
}: {
  imageSrc: string;
  alt: string;
  height: number;
  width: number;
  customHeight: string;
  bg: string;
}) {
  const [isLoading, setLoading] = useState(true);

  return (
    <div
      className={`${
        isLoading ? `w-full ${bg}  blur-sm` : "w-0"
      }  overflow-hidden  `}
      style={{ height: isLoading ? customHeight : "" }}
    >
      <Image
        alt={alt}
        src={imageSrc}
        width={width}
        height={height}
        className={cn(
          "duration-700 ease-in-out group-hover:opacity-75 ",
          isLoading
            ? "scale-110 blur-2xl grayscale"
            : "scale-100 blur-0 grayscale-0"
        )}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  );
}

export function MinimalBlurImage({
  imageSrc,
  height,
  width,
  customHeight,
  alt,
  bg,
}: {
  imageSrc: string;
  height: number;
  width: number;
  customHeight: string;
  alt: string;
  bg: string;
}) {
  const [isLoading, setLoading] = useState(true);

  return (
    <div
      className={`${
        isLoading && `w-20 rounded-full ${bg} `
      }  overflow-hidden rounded-full`}
      style={{ height: isLoading ? customHeight : "" }}
    >
      <Image
        alt={alt}
        src={imageSrc}
        width={width}
        height={height}
        className={cn(
          "duration-700 ease-in-out group-hover:opacity-75 ",
          isLoading
            ? "scale-110 blur-2xl grayscale"
            : "scale-100 blur-0 grayscale-0"
        )}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  );
}
