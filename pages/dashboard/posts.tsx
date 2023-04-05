import QuillNoSSRWrapper, {
  formats,
  modules,
} from "@/components/homePage/editor/quillEditor";
import { TextInputLabel } from "@/components/shared/inputLabel/inputLabel";
import ReactSelect from "@/components/shared/react-select";
import PostCoverUpload from "@/components/shared/upload/postCoverUpload";
import PostImageUpload from "@/components/shared/upload/postImageUpload";
import useShare from "@/lib/context/useShare";
import Metadata from "@/util/SEO/metadata";
import SubmitButton from "@/util/buttons/submitButton";
import { ShareContextType, TagValueOption } from "@/util/types/types";
import { useRouter } from "next/router";
import * as React from "react";
import { useState } from "react";
import { BsFillPostcardFill, BsInfoCircle } from "react-icons/bs";
import { TbAlertTriangleFilled } from "react-icons/tb";
import { TiInfoOutline } from "react-icons/ti";
import { toast } from "react-toastify";
import useSwr from "swr";
import Layout from "./layout";

const Posts = () => {
  const { mutate } = useSwr("http://localhost:3000/api/blogs");
  const [inputValue, setInputValue] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [value, setValue] = React.useState<readonly TagValueOption[]>([]);
  const titleRef = React.useRef<HTMLInputElement>(null);
  const subTitleRef = React.useRef<HTMLInputElement>(null);
  const { allContext } = useShare() as ShareContextType;
  const { data } = allContext;
  const Router = useRouter();
  const [thumbnail, setThumbnail] = useState<string>(
    "/images/post-imgUpload.png"
  );
  const [coverPicture, setCoverPicture] = useState<string>("/images/cover.png");

  const [html, setHtml] = React.useState<string>();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const blog_Title = titleRef.current?.value.trim();
    const blog_Slug = blog_Title?.trim().replaceAll(" ", "-");
    const blog_SubTitle = subTitleRef.current?.value;
    const full_blog_Html = html;
    const jsonData = {
      slug: blog_Slug,
      title: blog_Title,
      sub_title: blog_SubTitle,
      cover: coverPicture,
      thumbnail,
      html: full_blog_Html,
      tags: value,
      authorId: data?.verifiedToken?.id as string,
    };
    try {
      await mutate(async () => {
        const res = await fetch("/api/blogs", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(jsonData),
        });

        const response = await res.json();
        if (!response.success) {
          setLoading(false);
          toast.error(response.message, {
            icon: (
              <TiInfoOutline className="text-[var(--red-primary-brand-color)]" />
            ),
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          setLoading(false);
          toast.success(response.message, {
            icon: <TbAlertTriangleFilled className="text-green-400 text-3xl" />,
            position: toast.POSITION.TOP_CENTER,
          });
        }
        mutate("/api/blogs");
        Router.push("/blogs");
      });
    } catch (error) {
      setLoading(false);
      toast.success("Something went wrong!, try again later", {
        icon: (
          <TiInfoOutline className="text-[var(--red-primary-brand-color)]" />
        ),
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <>
      <Metadata
        title="Dashboard | Posts"
        name="Dashboard panel for admin and specific Member"
        content="all course page. You can find every course in this page that we are providing"
        // key="skill course, course, ms office, office 364"
      />
      <Layout>
        <form onSubmit={handleSubmit}>
          <div className="space-y-5 mb-5">
            <div className="BLOG-TITLE">
              <TextInputLabel
                field_ref={titleRef}
                labelTex="ব্লগের টাইটেল দিন"
                nameText="blog_title"
                placeholderText="ব্লগ টাইটেল"
                requiredType={true}
                title="ব্লগের টাইটেল"
                type="text"
                iconComponent={
                  <BsFillPostcardFill
                    className={`dark:text-gray-400 text-slate-400`}
                  />
                }
              />
            </div>
            <div className="BLOG-SUBTITLE">
              <TextInputLabel
                field_ref={subTitleRef}
                labelTex="ব্লগের সাব-টাইটেল দিন"
                nameText="blog_sub_title"
                placeholderText="ব্লগ  সাব-টাইটেল"
                requiredType={true}
                title="ব্লগের সাব-টাইটেল"
                type="text"
                iconComponent={
                  <BsFillPostcardFill
                    className={`dark:text-gray-400 text-slate-400`}
                  />
                }
              />
              <p className="mt-2 italic font-HSRegular flex items-center space-x-2 text-xs text-gray-300">
                <BsInfoCircle />
                <span>
                  সাব টাইটেল প্রত্যেক ব্লগ কার্ডের নিচে সর্ট ডিসক্রিফশন আকারে
                  দেখানো হবে।
                </span>
              </p>
            </div>

            <div className="REACT-SELECT-TAG">
              <ReactSelect
                inputValue={inputValue}
                setInputValue={setInputValue}
                value={value}
                setValue={setValue}
              />
            </div>

            <div className="BLOG-COVER-&-THUMBNAIL grid grid-flow-col place-content-center grid-cols-3 gap-4">
              <div className="BLOG-THUMBNAIL w-full  cursor-pointer">
                <PostImageUpload
                  pictureURL={thumbnail}
                  setPictureURL={setThumbnail}
                />
              </div>

              <div className="BLOG-COVER col-span-2 w-full cursor-pointer hover:bg-slate-50/10">
                <PostCoverUpload
                  pictureURL={coverPicture}
                  setPictureURL={setCoverPicture}
                />
              </div>
            </div>
          </div>
          <div className="text-black QUILL-EDITOR">
            <QuillNoSSRWrapper
              modules={modules}
              formats={formats}
              theme="snow"
              value={html}
              onChange={setHtml}
              className="rounded-lg bg-gray-200"
              defaultValue={"<p></p>"}
              placeholder="compose a blog here"
            />
          </div>
          <div className="mt-5">
            <SubmitButton loading={loading} buttonText="Post" />
          </div>
        </form>
      </Layout>
    </>
  );
};

export default Posts;
