import { FaMicrosoft, FaPeopleGroup } from "react-icons/fa6";
import { LuFileStack } from "react-icons/lu";
import { MdBarChart, MdOutlineDataThresholding } from "react-icons/md";
import { TbReport } from "react-icons/tb";

const About: React.FC = () => {
  const interests = [
    {
      icon: FaPeopleGroup,
      name: "People management",
      description: "I turn teams into strengths-based powerhouses through active listening and collaboration. Everyone thrives.",
    },
    {
      icon: LuFileStack,
      name: "File organisation",
      description: "Digital librarian here! My files are meticulously organized, saving me time and mental mayhem.",
    },
    {
      icon: FaMicrosoft,
      name: "MS Office Suite",
      description: "MS Office maestro - spreadsheets sing, presentations design themselves, documents practically write themselves.",
    },
    {
      icon: MdOutlineDataThresholding,
      name: "Data Collection",
      description: "I'm a data magnet. I can unearth valuable information from any source, ensuring my projects are built on a foundation of accurate and insightful data.",
    },
    {
      icon: MdBarChart,
      name: "Data Visualisation",
      description: "I transform numbers into impactful visuals, making complex insights clear and compelling for any audience.",
    },
    {
      icon: TbReport,
      name: "Reports",
      description: "I craft compelling reports. Complex data becomes clear stories, guiding decisions with impactful visuals and insightful analysis.",
    },
  ];

  return (
    <section id="interest" className="relative bg-slate-50">
      <div className="py-8 px-4 space-y-2">
        <div
          className="
          max-w-6xl mx-auto h-full py-8 text-center space-y-12
        "
        >
          <div className="space-y-2">
            <p className="text-3xl font-bold">Areas of Interets</p>
            <p className="text-xs text-neutral-400">
              Here are some of the thing i love to work on
            </p>
          </div>

          <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
            {interests.map(({ icon: Icon, name, description }) => (
              <div key={name} className="flex flex-col items-center gap-4">
                <Icon className="text-6xl text-primary" />
                <p className="font-bold text-lg">{name}</p>
                <p className="text-sm text-neutral-400">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
