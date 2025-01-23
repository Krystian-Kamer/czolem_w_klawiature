const PostTextBold = ({ text }: { text: string }) => {
  return (
    <p className="mb-4 font-bold text-lg leading-relaxed text-primary md:my-2 lg:mb-4 lg:mt-5 lg:text-2xl">
      {text}
    </p>
  );
};
export default PostTextBold;
