const PostSubtitle = ({ subtitle }: { subtitle: string }) => {
  return (
    <h2 className="mb-6 mt-8 lg:mt-14 lg:w-5/6 leading-normal text-primary font-protest text-xl md:text-2xl lg:text-3xl tracking-wider">
      {subtitle}
    </h2>
  );
};
export default PostSubtitle;
