import { ProjectType } from "../types";

const Project = ({ project }: { project: ProjectType }) => {
  const { id, name, img, description, technology, github, live } = project;

  return (
    <div key={id} className="card w-fit bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt={name} className="w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <p>{technology}</p>
        <div className="card-actions justify-end">
          <a className="badge badge-accent" href={github}>
            github
          </a>
          <a className="badge badge-accent" href={live}>
            live
          </a>
        </div>
      </div>
    </div>
  );
};
export default Project;
