import background from "../assets/background.jpeg";

const PostPreview = () => {
  return (
    <div className="mb-28 flex h-96 w-full drop-shadow-[0px_0px_5px_rgba(0,0,0,0.2)]">
      <img
        src={background}
        alt="post image"
        className="w-2/6 rounded-l-badge object-cover opacity-95"
      />
      <div className="prose w-3/6 rounded-r-badge bg-white/80 p-8">
        <div className="prose">
          <h3 className="font-protest text-3xl uppercase tracking-wide">
            Destrukturyzacja w JS czyli jak nie wyrwać sobie ostatniego włosa z
            głowy
          </h3>
        </div>
        <button className="cursor-custom-pointer mt-2 bg-accent px-1 font-protest">
          #javascript
        </button>
        <p className="text-lg leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa,
          reiciendis? Laudantium vel maxime quas odit quia! Distinctio quas
          minus quam!...
        </p>
        <button className="cursor-custom-pointer group rounded-sm bg-primary px-8 py-2 font-protest text-2xl uppercase text-neutral duration-200 hover:bg-primary/95 hover:text-white">
          Czytaj...
        </button>
      </div>
      <div className="flex w-1/6 flex-col items-center justify-center font-mono text-2xl italic text-secondary select-none opacity-20">
        <p>12</p>
        <p>11</p>
        <p>24</p>
      </div>
    </div>
  );
};
export default PostPreview;
