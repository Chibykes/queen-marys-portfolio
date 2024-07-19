import Image from "next/image";
import Link from "next/link";
import { LuExternalLink } from "react-icons/lu";

const Projects: React.FC = () => {
  const projects = [
    {
      image: "/projects/staff-survey.jpeg",
      title: "Staff Survery Analysis",
      description: "A report showcasing staff performance and pain points in a company",
      link: "https://app.powerbi.com/groups/me/reports/db643b80-4714-4ee8-8d8b-6a989c2a1ce8/ReportSection?bookmarkGuid=d80a2813-f452-4464-90b6-7477a16ed827&bookmarkUsage=1&ctid=b07ffba6-9b09-4de0-8b17-fe66f0af70c0&portalSessionId=47c0c27e-422a-4910-bcd3-522ed1647508&fromEntryPoint=export",
    },
    {
      image: "/projects/quarterly-report.jpeg",
      title: "Company Quarterly Report",
      description: "Analysis detailing a company quarterly report",
      link: "https://app.powerbi.com/groups/me/reports/fb2945ae-0cc7-4230-b455-ff8db464236a/ReportSection?bookmarkGuid=28559f67-ca75-424f-af69-5eae9280b78b&bookmarkUsage=1&ctid=b07ffba6-9b09-4de0-8b17-fe66f0af70c0&portalSessionId=47c0c27e-422a-4910-bcd3-522ed1647508&fromEntryPoint=export",
    },
    {
      image: "/projects/titanic-analysis.jpeg",
      title: "Titanic Survival Analysis",
      description: "A personal project",
      link: "https://app.powerbi.com/groups/me/reports/d3eac25c-5d01-4861-a842-7c222128a9c5/ReportSection?bookmarkGuid=e524f0c3-9ee0-46e8-bf30-e6d60b7f901e&bookmarkUsage=1&ctid=b07ffba6-9b09-4de0-8b17-fe66f0af70c0&portalSessionId=47c0c27e-422a-4910-bcd3-522ed1647508&fromEntryPoint=export",
    },
    {
      image: "/projects/worldcup-survey.jpeg",
      title: "World Cup Survey",
      description: "A personal project",
      link: "https://app.powerbi.com/groups/me/reports/d1f697fd-f771-4c08-bbde-0e9ae1568c70/ReportSection?bookmarkGuid=6e049c60-8304-45c7-ac70-0aa57a1a1ea4&bookmarkUsage=1&ctid=b07ffba6-9b09-4de0-8b17-fe66f0af70c0&portalSessionId=47c0c27e-422a-4910-bcd3-522ed1647508&fromEntryPoint=export",
    }
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
