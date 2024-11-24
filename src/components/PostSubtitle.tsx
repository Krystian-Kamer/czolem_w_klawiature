const PostSubtitle = ({ subtitle }: { subtitle: string }) => {
  return (
    <h2 className="mb-6  mt-12 lg:mt-16 lg:w-5/6 leading-normal font-protest text-xl md:text-2xl lg:text-3xl tracking-wider">
      {subtitle}
    </h2>
  );
};
export default PostSubtitle;
