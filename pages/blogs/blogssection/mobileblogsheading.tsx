import { BlurImage } from "@/lib/blurImage";

const MobileVersionBlogHeading = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1  gap-4">
        <div className="">
          <div className="lg:hidden block">
            <BlurImage
              alt="Robotics cover picture"
              bg="bg-slate-300"
              height={100}
              imageSrc="/blogs/Robotics1.jpg"
              width={700}
              customHeight="12.375rem"
            />
          </div>

          <div className="grid grid-cols-2 gap-2 mt-3">
            <div className="lg:hidden block">
              <BlurImage
                alt="Blog writing cover picture"
                bg="bg-slate-300"
                height={100}
                imageSrc="/blogs/blog-writting.webp"
                width={400}
                customHeight="7.375rem"
              />
            </div>
            <div className="lg:hidden block">
              <BlurImage
                alt="JBL headphone cover picture"
                bg="bg-slate-300"
                height={100}
                imageSrc="/blogs/horizentalImg4_.png"
                width={400}
                customHeight="7.375rem"
              />
            </div>
          </div>
        </div>
        <div className="">
          <div className="lg:hidden block">
            <BlurImage
              alt="A book is like a monitor of a laptop"
              bg="bg-slate-300"
              height={100}
              imageSrc="/blogs/e-learning.jpg"
              width={700}
              customHeight="12.375rem"
            />
          </div>
          <div className="grid grid-cols-2 gap-2 mt-3">
            <div className="lg:hidden block">
              <BlurImage
                alt="Laptop display with programming wallpaper"
                bg="bg-slate-300"
                height={100}
                imageSrc="/blogs/programming.png"
                width={400}
                customHeight="7.375rem"
              />
            </div>
            <div className="lg:hidden block">
              <BlurImage
                alt="A lot of gadget picture wallpaper"
                bg="bg-slate-300"
                height={100}
                imageSrc="/blogs/gadget.webp"
                width={400}
                customHeight="7.375rem"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileVersionBlogHeading;
