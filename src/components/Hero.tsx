import Image from "next/image";
import Logo from "./Logo";
import { CgMenuRight } from "react-icons/cg";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className="relative lg:h-screen min-h-screen">
      <header className="relative flex justify-between items-center px-8 py-4 bg-white shadow-lg">
        {/* <div className="absolute left-0 right-0 bottom-0 w-full mx-auto h-px rounded-[50%] bg-[#ff8585]"></div> */}
        <Logo />
        <nav className="lg:flex hidden justify-end items-center gap-4">
          <Link className="hover:text-primary text-sm font-medium" href={"#interest"}>
            About Me
          </Link>
          <Link className="hover:text-primary text-sm font-medium" href={"#tools"}>
            Skills
          </Link>
          <Link className="hover:text-primary text-sm font-medium" href={"#projects"}>
            Projects
          </Link>
          <Link className="hover:text-primary text-sm font-medium" href={"#contact"}>
            Contact Me
          </Link>
        </nav>
        {/* <CgMenuRight className="text-3xl"/> */}

        <Link href={"#"} className="
            text-sm bg-transparent border-2 border-black text-black rounded-sm px-4 py-2
            hover:bg-primary hover:text-white hover:border-primary duration-200
          ">
              Resume
          </Link>
      </header>

      <div className="py-4 px-8 h-full">
        <div className="
          max-w-6xl mx-auto grid lg:grid-cols-2 
          grid-cols-1 gap-12 lg:gap-20 content-center 
          h-full py-8
        ">
          <div className="space-y-8 lg:block flex flex-col justify-center items-center lg:text-left text-center">
            <p className="text-6xl font-bold text-primary">
              QueenMary Chinanu Ekpebuwa
            </p>
            <p className="text-2xl font-medium text-neutral-600">
              Human Resource Manager & Senior Data Analyst
            </p>
            {/* <p className="text-base font-medium">
              <span className="underline underline-offset-2">
                &ldquo;All around us there is data, but to get insight you need a
                data analyst.&rdquo;
              </span><br />{" "}
              I love diving deep into data and taking my time to figure out
              meaningful insights and organise my findings into a well detailed
              report.
            </p> */}
            <Link href={"#contact"} className="
              text-lg bg-black text-white rounded-md px-8 py-3
              hover:bg-primary duration-200
            ">
                Get in touch
            </Link>
          </div>

          <div
            className="
              w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] 
              relative inline-block shrink-0 group isolate
              mx-auto -translate-x-8
          "
          >
            <Image
              src="/hero_img.jpg"
              className="object-cover object-center aspect-square grayscale group-hover:grayscale-0"
              alt="Mary Queen"
              fill
            />
            <div className="
              absolute left-8 top-8 lg:left-12 lg:top-12 
              w-full h-full border border-[#ff8585] no-bg-[#ff8585] 
              -z-10
            "></div>
          </div>
        </div>
      </div>

      {/* <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-b from-transparent to-primary"></div> */}
    </section>
  );
};

export default Hero;
