export default function Experience() {
  const experiences = [
    {
      id: 1,
      poste: "Développeur React Junior",
      entreprise: "Tech Solutions",
      periode: "2023 - Présent",
      description: "Développement d'applications web modernes avec React et Vite, intégration d'API REST."
    },
    {
      id: 2,
      poste: "Stagiaire Développeur Web",
      entreprise: "WebAgency",
      periode: "2022 (6 mois)",
      description: "Intégration de maquettes HTML/CSS et création de composants réutilisables."
    }
  ];

  return (
    <section className="cv-section">
      <h2>Expériences Professionnelles</h2>
      {experiences.map((exp) => (
        <div key={exp.id} className="cv-card">
          <h3>{exp.poste} - <span>{exp.entreprise}</span></h3>
          <span className="periode">{exp.periode}</span>
          <p>{exp.description}</p>
        </div>
      ))}
    </section>
  );
}