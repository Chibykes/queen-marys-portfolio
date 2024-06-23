import Image from "next/image";
import Link from "next/link";
import { LuExternalLink } from "react-icons/lu";

const Projects: React.FC = () => {
  const projects = [
    {
      image: "/projects/dashboard.jpg",
      title: "World Map data",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, hic!",
      link: "#",
    },
    {
      image: "/projects/dashboard2.jpg",
      title: "Replica Dashboard",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, hic!",
      link: "#",
    },
    {
      image: "/projects/kpi-infographic.jpg",
      title: "KPI Analysis",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, hic!",
      link: "#",
    },
    {
      image: "/projects/scoreboard.jpg",
      title: "Financial Scoreboard",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, hic!",
      link: "#",
    },
    {
      image: "/projects/scoreboard.jpg",
      title: "Financial Scoreboard",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, hic!",
      link: "#",
    },
    {
      image: "/projects/kpi-infographic.jpg",
      title: "KPI Analysis",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, hic!",
      link: "#",
    },
    {
      image: "/projects/dashboard.jpg",
      title: "World Map data",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, hic!",
      link: "#",
    },
    {
      image: "/projects/dashboard2.jpg",
      title: "Replica Dashboard",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, hic!",
      link: "#",
    },
  ];

  return (
    <section className="relative flex flex-col gap-8">
      <div className="space-y-2">
        <div
          className="
          h-full pt-8 text-center space-y-12
        "
        >
          <div className="space-y-2">
            <p className="text-3xl font-bold">Projects</p>
            <p className="text-xs text-neutral-400">
              Samples of what I&apos;ve worked on
            </p>
          </div>

          <div className="grid lg:grid-cols-4 grid-cols-1">
            {projects.map(({ image, title, description, link }) => (
              <div
                key={title}
                className="group relative w-full h-[300px] overflow-hidden"
              >
                <Image
                  className="object-cover"
                  src={image}
                  alt={title}
                  fill
                />
                <div
                  className="
                  absolute top-full left-0 w-full h-full flex
                  flex-col justify-center items-start text-white
                  bg-[#e26262d0] text-center gap-4 p-4
                  group-hover:top-0 duration-200
                "
                >
                  <p className="font-bold text-lg mx-auto">{title}</p>
                  <p className="text-sm mx-auto">
                    {description}
                  </p>
                  <Link href={link} className="mx-auto">
                    <LuExternalLink className="text-2xl" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
