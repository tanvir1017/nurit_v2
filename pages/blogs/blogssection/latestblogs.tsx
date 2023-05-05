import BlogFilterHeading from "@/lib/blogfilterheading";

const LatestBlogs = () => {
  return (
    <section>
      <BlogFilterHeading
        text="Latest Articles"
        border_div_classes="border-b border-2 border-cyan-500 mt-[3px]"
        classes="bg-cyan-700 px-3 font-HSLight text-white"
      />
    </section>
  );
};

export default LatestBlogs;
