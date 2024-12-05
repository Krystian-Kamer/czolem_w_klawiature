const WindowProjectContent = () => {
  return (
    <div role="tablist" className="tabs rounded-none bg-neutral p-0">
      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab my-1 text-base italic tracking-wider text-secondary"
        aria-label="Opis"
      />
      <div
        role="tabpanel"
        className="tab-content min-h-[500px] border-base-200 bg-base-100 p-10 text-2xl"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed nesciunt
        modi fugiat saepe, quisquam eligendi facilis maiores quaerat aut
        consequatur! Earum optio ut molestiae ex tempore porro repellat placeat
        excepturi officiis sit quibusdam molestias rerum, error eius obcaecati
        dolores adipisci?
      </div>

      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab rounded-box bg-base-100 text-base italic tracking-wider text-secondary"
        aria-label="Video"
        defaultChecked
      />
      <div
        role="tabpanel"
        className="tab-content min-h-[500px] border-base-200 bg-base-100 p-10 text-2xl"
      >
        Tab content 2
      </div>

      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab my-1 text-base italic tracking-wider text-secondary"
        aria-label="Technicznie"
      />
      <div
        role="tabpanel"
        className="tab-content min-h-[500px] border-base-200 bg-base-100 p-10 text-2xl"
      >
        Tab content 3
      </div>
    </div>
  );
};
export default WindowProjectContent;
