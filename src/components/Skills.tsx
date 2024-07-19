import {
  SiMicrosoftexcel,
  SiMicrosoftpowerpoint,
  SiMicrosoftsqlserver,
  SiMicrosoftword,
  SiMysql,
  SiPowerbi,
  SiSage,
  SiTableau,
} from "react-icons/si";

const Skills: React.FC = () => {
  return (
    <section id="tools" className="relative flex flex-col gap-8">
      <div className="py-8 px-4 space-y-2">
        <div
          className="
          max-w-6xl mx-auto h-full py-8 text-center space-y-12
        "
        >
          <div className="space-y-2">
            <p className="text-3xl font-bold">Tools I use</p>
            <p className="text-xs text-neutral-400">
              Here are some of the tool I use to get the job done.
            </p>
          </div>

          <div className="flex flex-wrap gap-12 justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-4 hover:text-[#1757b7]">
              <SiMicrosoftword className="text-5xl" />
              <p className="text-sm text-center">Microsoft Word</p>
            </div>

            <div className="flex flex-col justify-center items-center gap-4 hover:text-[#0e783f]">
              <SiMicrosoftexcel className="text-5xl" />
              <p className="text-sm text-center">Microsoft Excel</p>
            </div>

            <div className="flex flex-col justify-center items-center gap-4 hover:text-[#ce4f2e]">
              <SiMicrosoftpowerpoint className="text-5xl" />
              <p className="text-sm text-center">Microsoft Powerpoint</p>
            </div>

            <div className="flex flex-col justify-center items-center gap-4 hover:text-slate-500">
              <SiMicrosoftsqlserver className="text-5xl" />
              <p className="text-sm text-center">Microsoft SSMS</p>
            </div>

            <div className="flex flex-col justify-center items-center gap-4 hover:text-[#005b85]">
              <SiMysql className="text-5xl" />
              <p className="text-sm text-center">MySQL</p>
            </div>

            <div className="flex flex-col justify-center items-center gap-4 hover:text-[#efc42f]">
              <SiPowerbi className="text-5xl" />
              <p className="text-sm text-center">PowerBi</p>
            </div>

            <div className="
              flex flex-col justify-center items-center gap-4 
              hover:bg-gradient-to-tr from-[#d51b35] via-[#ec6e2a] to-[#5087a6]
              bg-clip-text text-fill-none group
            ">
              <SiTableau className="text-5xl group-hover:text-[#d51b35]" />
              <p className="text-sm text-center">Tableau</p>
            </div>

            <div className="flex flex-col justify-center items-center gap-4 hover:text-[#0ad639]">
              <SiSage className="text-5xl" />
              <p className="text-sm text-center">Sage</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
