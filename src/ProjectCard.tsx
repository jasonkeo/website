interface ProjectCardProps {
    logo?: string;
    name: string;
    link: string
    description: string[];
    techused: string[]
}

export default function ProjectCard({
    logo, // optional
    name,
    link,
    description,
    techused
}: ProjectCardProps) {

    const techList = techused.join(", ");
    return (
        <div className="experience-card">

            <img src={logo} alt={`${name} logo`} className="w-16 h-16 object-contain" />
            <div id="edtop">
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <h3>{name}</h3>
                </a>
            </div>



            <div id="edbot" >
                <h4 style={{ marginLeft: "15px" }}>Tech Used: {techList}</h4>
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