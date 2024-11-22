import { PostSubtitle, PostText } from "../components/index";

const Post1 = () => {
  return (
    <div>
      <PostSubtitle subtitle="Cześć" />
      <PostText
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur unde
        at quasi cum distinctio rem similique debitis quod, autem obcaecati.
        Corrupti, laborum temporibus eos iste excepturi laudantium. Cum, ipsam1"
      />

      <div className="mockup-code w-4/5 justify-self-center bg-primary text-neutral">
        <code className="ml-4">
          const x = [23+23] Lorem, ipsum dolor sit amet consecte
        </code>
      </div>
    </div>
  );
};
export default Post1;
