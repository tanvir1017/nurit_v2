import Image from "next/image";
import { useState } from "react";

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export function BlurImage({ imageSrc }: { imageSrc: string }) {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className="aspect-w-1 aspect-h-1 overflow-hidden bg-gray-200 ">
      <Image
        alt=""
        src={imageSrc}
        layout="fill"
        objectFit="cover"
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
