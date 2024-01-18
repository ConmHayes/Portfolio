export default function ProjectCard({ title, imgName, description }) {
  
  return (
    <div className="project-card">
      <h2>{title}</h2>
      <img src={imgName} alt={title} />
      <p>{description}</p>
    </div>
  );
}
