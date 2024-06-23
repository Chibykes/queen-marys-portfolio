import {
  SiMicrosoftexcel,
  SiMicrosoftpowerpoint,
  SiMicrosoftsqlserver,
  SiMysql,
  SiPowerbi,
  SiTableau,
} from "react-icons/si";

const Skills: React.FC = () => {
  return (
    <section className="relative flex flex-col gap-8">
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
            <div className="flex flex-col justify-center items-center gap-4">
              <SiMicrosoftexcel className="text-5xl" />
              <p className="text-xs text-center">Microsoft Excel</p>
            </div>

            <div className="flex flex-col justify-center items-center gap-4">
              <SiMicrosoftsqlserver className="text-5xl" />
              <p className="text-xs text-center">Microsoft SSMS</p>
            </div>

            <div className="flex flex-col justify-center items-center gap-4">
              <SiMicrosoftpowerpoint className="text-5xl" />
              <p className="text-xs text-center">Microsoft Powerpoint</p>
            </div>

            <div className="flex flex-col justify-center items-center gap-4">
              <SiMysql className="text-5xl" />
              <p className="text-xs text-center">MySQL</p>
            </div>

            <div className="flex flex-col justify-center items-center gap-4">
              <SiPowerbi className="text-5xl" />
              <p className="text-xs text-center">PowerBi</p>
            </div>

            <div className="flex flex-col justify-center items-center gap-4">
              <SiTableau className="text-5xl" />
              <p className="text-xs text-center">Tableau</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
