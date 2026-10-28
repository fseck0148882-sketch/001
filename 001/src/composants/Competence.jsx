export default function Competence() {
  const competences = ["React.js", "JavaScript ", "HTML & CSS", "Git & GitHub", "Vite"];

  return (
    <section className="cv-section">
      <h2>Compétences</h2>
      <ul className="competences-list">
        {competences.map((skill, index) => (
          <li key={index} className="skill-badge">{skill}</li>
        ))}
      </ul>
    </section>
  );
}