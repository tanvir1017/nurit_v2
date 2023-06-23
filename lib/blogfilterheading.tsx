const BlogFilterHeading = ({
  text,
  classes,
  border_div_classes,
}: {
  text: string;
  classes: string;
  border_div_classes: string;
}) => {
  return (
    <>
      <span className={classes}>{text}</span>
      <div className={border_div_classes}></div>
    </>
  );
};

export default BlogFilterHeading;
