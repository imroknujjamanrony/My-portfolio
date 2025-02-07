import { useParams } from "react-router-dom";

const projectData = [
  {
    name: "project-1",
    techStack: "React, Node.js, Express",
    description: "A detailed description of Project 1",
    liveLink: "http://example.com/project1",
    githubLink: "http://github.com/project1",
    challenges: "Challenge 1, Challenge 2",
    improvements: "Improvement 1, Future Plan 1",
  },
  {
    name: "project-2",
    techStack: "React, Node.js, Express",
    description: "A detailed description of Project 2",
    liveLink: "http://example.com/project2",
    githubLink: "http://github.com/project2",
    challenges: "Challenge 1, Challenge 2",
    improvements: "Improvement 1, Future Plan 1",
  },
  {
    name: "project-3",
    techStack: "React, Node.js, Express",
    description: "A detailed description of Project 3",
    liveLink: "http://example.com/project3",
    githubLink: "http://github.com/project3",
    challenges: "Challenge 1, Challenge 2",
    improvements: "Improvement 1, Future Plan 1",
  },
];

export const ProjectDetails = () => {
  const { projectName } = useParams();
  const project = projectData.find((p) => p.name === projectName);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <section>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-8">{project.name}</h2>
        <p>
          <strong>Tech Stack:</strong> {project.techStack}
        </p>
        <p>
          <strong>Description:</strong> {project.description}
        </p>
        <p>
          <strong>Live Link:</strong>{" "}
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
            {project.liveLink}
          </a>
        </p>
        <p>
          <strong>GitHub Link:</strong>{" "}
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.githubLink}
          </a>
        </p>
        <p>
          <strong>Challenges:</strong> {project.challenges}
        </p>
        <p>
          <strong>Improvements:</strong> {project.improvements}
        </p>
      </div>
    </section>
  );
};
