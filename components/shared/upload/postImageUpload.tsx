import Image from "next/legacy/image";
import { useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { TbAlertTriangleFilled } from "react-icons/tb";
import { TiInfoOutline } from "react-icons/ti";
import { Bounce, ToastContainer, toast } from "react-toastify";

const PostImageUpload = ({ pictureURL, setPictureURL }: any) => {
  const [loading, setLoading] = useState(false);

  const uploadImage = async (e: any) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    formData.append("upload_preset", "bt6wp3fo");
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
          toast.success("Picture upload successful", {
            icon: <TbAlertTriangleFilled className="text-green-400" />,
            position: toast.POSITION.BOTTOM_CENTER,
          });
        })();
      } else {
        setLoading(false);
        (async () => {
          toast.error("Something went wrong", {
            icon: (
              <TiInfoOutline className="text-[var(--red-primary-brand-color)]" />
            ),
            position: toast.POSITION.BOTTOM_CENTER,
          });
        })();
      }
    } catch (error) {
      if (error) {
        (async () => {
          toast.error("Internal server error while uploading picture", {
            icon: (
              <TiInfoOutline className="text-[var(--red-primary-brand-color)]" />
            ),
            position: toast.POSITION.BOTTOM_CENTER,
          });
        })();
        setLoading(false);
      }
    }
  };
  return (
    <>
      <ToastContainer transition={Bounce} hideProgressBar />
      <div className="h-52 border-2 border-dashed  relative overflow-hidden">
        {loading ? (
          <Image
            className="absolute"
            src="/icons/loader.svg"
            alt="Blog post image"
            layout="fill"
          />
        ) : (
          <Image
            className="absolute"
            src={pictureURL}
            alt="Blog post image"
            layout="fill"
            objectFit="cover"
            priority
          />
        )}
        <div className="rounded-full absolute top-[100%] upload_icon   transition-all duration-300 opacity-100  left-[50%] -translate-x-[50%] -translate-y-[50%]">
          <label className="absolute transition duration-200 p-4 top-[100%] left-[50%] -translate-x-[50%] -translate-y-[50%] rounded-full  bg-white border-2 border-white/30">
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

export default PostImageUpload;
