import QuillNoSSRWrapper, {
  formats,
  modules,
} from "@/components/homePage/editor/quillEditor";
import { TextInputLabel } from "@/components/shared/inputLabel/inputLabel";
import PostCoverUpload from "@/components/shared/upload/postCoverUpload";
import PostImageUpload from "@/components/shared/upload/postImageUpload";
import Metadata from "@/util/SEO/metadata";
import SubmitButton from "@/util/buttons/submitButton";
import * as React from "react";
import { useState } from "react";
import { BsFillPostcardFill, BsInfoCircle } from "react-icons/bs";
import Layout from "./layout";

const Posts = () => {
  const [thumbnail, setThumbnail] = useState<string>(
    "/images/post-imgUpload.png"
  );
  const [coverPicture, setCoverPicture] = useState<string>("/images/cover.png");
  const [html, setHtml] = React.useState<string>();
  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (html?.trim().length === 11) {
      window.alert("Empty");
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
            <SubmitButton buttonText="Post" />
          </div>
        </form>
      </Layout>
    </>
  );
};

export default Posts;
