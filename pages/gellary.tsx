import Image from "next/image";
import { useState } from "react";

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

type Image = {
  id: number;
  href: string;
  imageSrc: string;
  name: string;
  username: string;
};
const images = [
  {
    id: 1,
    href: "/courses",
    imageSrc: "/blur/1.jpg",
    name: "Courses",
    username: "admin",
  },
  {
    id: 2,
    href: "/courses",
    imageSrc: "/blur/2.jpg",
    name: "Courses",
    username: "admin",
  },
  {
    id: 3,
    href: "/courses",
    imageSrc: "/blur/3.jpg",
    name: "Courses",
    username: "admin",
  },
  {
    id: 4,
    href: "/courses",
    imageSrc: "/blur/4.jpg",
    name: "Courses",
    username: "admin",
  },
  {
    id: 5,
    href: "/courses",
    imageSrc: "/blur/5.jpg",
    name: "Courses",
    username: "admin",
  },
  {
    id: 6,
    href: "/courses",
    imageSrc: "/blur/6.jpg",
    name: "Courses",
    username: "admin",
  },
  {
    id: 7,
    href: "/courses",
    imageSrc: "/blur/7.jpg",
    name: "Courses",
    username: "admin",
  },
  {
    id: 8,
    href: "/courses",
    imageSrc: "/blur/8.jpg",
    name: "Courses",
    username: "admin",
  },
  {
    id: 9,
    href: "/courses",
    imageSrc: "/blur/9.jpg",
    name: "Courses",
    username: "admin",
  },
];

export default function Gallery() {
  return (
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {images.map((image) => (
          <BlurImage key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
}

function BlurImage({ image }: { image: Image }) {
  const [isLoading, setLoading] = useState(true);

  return (
    <a href={image.href} className="group">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
        <Image
          alt=""
          src={image.imageSrc}
          layout="fill"
          objectFit="cover"
          className={cn(
            "duration-700 ease-in-out group-hover:opacity-75",
            isLoading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          )}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{image.name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">{image.username}</p>
    </a>
  );
}
