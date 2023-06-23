import { BlurImage } from "@/lib/blurImage";
import { useEffect, useState } from "react";

const BlogsHeading = () => {
  const [blurHeight, setBlurHeight] = useState<string>("24.375rem");
  const [smallThumbHeight, setSmallThumbHeight] = useState<string>("14.375rem");
  useEffect(() => {
    const findHeight = window.screen.height;

    switch (true) {
      case findHeight >= 320 && findHeight <= 480:
        // COMMENT : set the custom height for mobile devices
        setBlurHeight("12.375rem");
        setSmallThumbHeight("7.375rem");
        break;

      case findHeight >= 481 && findHeight <= 768:
        // COMMENT : set the custom height for iPads, Tablets
        setBlurHeight("24.375rem");
        setSmallThumbHeight("14.375rem");

        break;

      case findHeight >= 769 && findHeight <= 1024:
        // COMMENT : set the custom height for Small screens, laptops
        setBlurHeight("24.375rem");
        setSmallThumbHeight("14.375rem");

        break;

      case findHeight >= 1025 && findHeight <= 1200:
        // COMMENT : set the custom height for Desktops, large screens
        setBlurHeight("27rem");
        setSmallThumbHeight("16rem");

        break;

      default:
        // COMMENT : set the custom height for Extra large screens, TV
        setBlurHeight("30rem");
        setSmallThumbHeight("20rem");
    }
  }, []);
  return (
    <>
      <div className="grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4">
        <div>
          <div>
            <BlurImage
              alt="Robotics cover picture"
              bg="bg-slate-300"
              height={100}
              imageSrc="/blogs/Robotics1.jpg"
              width={1000}
              customHeight={blurHeight}
            />
          </div>

          <div className="grid grid-cols-2 gap-2 mt-3">
            <BlurImage
              alt="Blog writing cover picture"
              bg="bg-slate-300"
              height={100}
              imageSrc="/blogs/blog-writting.webp"
              width={400}
              customHeight={smallThumbHeight}
            />
            <BlurImage
              alt="JBL headphone cover picture"
              bg="bg-slate-300"
              height={100}
              imageSrc="/blogs/horizentalImg4_.png"
              width={400}
              customHeight={smallThumbHeight}
            />
          </div>
        </div>
        <div className="">
          <BlurImage
            alt="A book is like a monitor of a laptop"
            bg="bg-slate-300"
            height={100}
            imageSrc="/blogs/e-learning.jpg"
            width={1000}
            customHeight={blurHeight}
          />
          <div className="grid grid-cols-2 gap-2 mt-3">
            <BlurImage
              alt="Laptop display with programming wallpaper"
              bg="bg-slate-300"
              height={100}
              imageSrc="/blogs/programming.png"
              width={400}
              customHeight={smallThumbHeight}
            />
            <BlurImage
              alt="A lot of gadget picture wallpaper"
              bg="bg-slate-300"
              height={100}
              imageSrc="/blogs/gadget.webp"
              width={400}
              customHeight={smallThumbHeight}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogsHeading;
