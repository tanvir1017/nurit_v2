import Image from "next/image";
import { useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { toast, ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ImageUpload = ({ pictureURL, setPictureURL }: any) => {
  const [loading, setLoading] = useState(false);

  const uploadImage = async (e: any) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    formData.append("upload_preset", "lxphac3w");
    formData.append("cloud_name", "djbcnjkin");
    try {
      const res = await window.fetch(
        `https://api.cloudinary.com/v1_1/djbcnjkin/image/upload`,
        {
          method: "post",
          body: formData,
        }
      );
      const result = await res.json();
      if (result.url) {
        setPictureURL(result.url);
        setLoading(false);
        (async () => {
          toast.success("Picture upload successful ⚒", {
            theme: "colored",
          });
        })();
      } else {
        setLoading(false);
        (async () => {
          toast.error("Something went wrong", {
            theme: "colored",
            icon: "👎",
          });
        })();
      }
    } catch (error) {
      console.log(error);
      if (error) {
        (async () => {
          toast.error("Internal server error while uploading picture", {
            theme: "colored",
            icon: "⭕",
          });
        })();
        setLoading(false);
      }
    }
  };
  return (
    <>
      <ToastContainer transition={Zoom} />
      <div className="w-[145px] h-[144px] border-2 rounded-full m-auto relative overflow-hidden">
        {loading ? (
          <Image
            className="absolute"
            src="/icons/loader.svg"
            alt="user-avatar"
            layout="fill"
            objectFit="cover"
            priority
          />
        ) : (
          <Image
            className="absolute"
            src={pictureURL}
            alt="user-avatar"
            layout="fill"
            objectFit="cover"
            priority
          />
        )}
        <div
          className="rounded-full absolute top-[100%] hover:top-[50%] transition-all
              duration-300 opacity-0 hover:opacity-100  left-[50%] -translate-x-[50%] -translate-y-[50%]"
        >
          <label className="absolute transition duration-200 p-4 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] rounded-full backdrop-blur-sm bg-white/5 border-2 border-white/30">
            <AiOutlineCloudUpload className="text-[var(--red-primary-brand-color)]" />{" "}
          </label>
          <input
            className="scale-150 p-8 opacity-0 cursor-pointer top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] absolute"
            required={true}
            type="file"
            onChange={uploadImage}
          />
        </div>
      </div>
    </>
  );
};

export default ImageUpload;
