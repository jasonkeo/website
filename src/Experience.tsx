interface ExperienceCardProps {
  logo: string;
  name: string;
  link: string;
  date: string;
  location: string;
  role: string;
  description: string[];
}

export default function ExperienceCard({
  logo,
  name,
  link,
  date,
  location,
  role,
  description,
}: ExperienceCardProps){
  return (
    <div className="experience-card">
      <img src={logo} alt={`${name} logo`} className="w-16 h-16 object-contain" />

      <div id="edtop">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <h3>{name}</h3>
        </a>
        <h4>{date}</h4>
      </div>

      <div id="edbot">
        <img src="/location.png" alt="location" className="w-4 h-4" />
        <h4>{location}</h4>

        <img src="/suitcase.png" alt="role" className="w-4 h-4" />
        <h4>{role}</h4>
      </div>

      <ul>
        {description.map((item, index) => (
          <li key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}