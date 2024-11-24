import { PostSubtitle, PostText } from "../components/index";

const Post1 = () => {
  return (
    <div>
      <PostSubtitle subtitle="Zastanówmy się chwilę jakie mamy metody w JavaScript" />
      <PostText
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur unde
        at quasi cum distinctio rem similique debitis quod, autem obcaecati.
        Corrupti, laborum temporibus eos iste excepturi laudantium. Cum, ipsam1"
      />
      <PostSubtitle subtitle="Mamy metody destrukcyjne i niedestrukcyjne" />
      <PostText text="W skróce te pierwsze rozpierdzielają nam tablicę, na której pracujemy a te drugie nie. Trzeba wiedzieć więc które to które." />
      <div className="mockup-code w-full justify-self-center bg-primary text-neutral md:w-1/2">
        <pre>
          <code>
            console.log('ninja') <span className="text-neutral/50">//ninja</span>
          </code>
        </pre>
      </div>
      <PostText
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur unde
        at quasi cum distinctio rem similique debitis quod, autem obcaecati.
        Corrupti, laborum temporibus eos iste excepturi laudantium. Cum, ipsam1"
      />
    </div>
  );
};
export default Post1;
