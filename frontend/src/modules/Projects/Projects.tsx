
import { useEffect, useState } from 'react';

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => setProjects(data));
  }, []);

  return (
    <section className="p-8 bg-gray-700">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project: any, idx) => (
          <div key={idx} className="bg-gray-900 p-4 rounded shadow">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
