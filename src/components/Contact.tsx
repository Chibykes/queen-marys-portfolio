import Link from "next/link";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative flex flex-col gap-8 bg-primary text-white">
      <div className="py-8 px-4 space-y-2">
        <div
          className="
          max-w-6xl mx-auto h-full py-8 text-center space-y-12
        "
        >
          <div className="space-y-2">
            <p className="text-3xl font-bold">Get in touch</p>
            <p className="text-xs text-white">
              Let get some work done together.
            </p>
          </div>

          <form className="lg:w-2/5 p-4 mx-auto space-y-4 text-black">
            <input 
              type="text"
              className="px-4 py-2 rounded-md border border-neutral-400 w-full"
              placeholder="Name"
              />
            <input 
              type="email"
              className="px-4 py-2 rounded-md border border-neutral-400 w-full"
              placeholder="Email"
              />
            <textarea 
              className="px-4 py-2 rounded-md border border-neutral-400 w-full h-48"
              placeholder="Message"
            />
            <button className="px-4 py-3 rounded-md bg-black text-white text-sm font-bold w-full">
              Send Message
            </button>
          </form>

          <footer className="text-sm">
            <p className="">&copy; 2024 - Portfolio QueenMary</p>
            <p className="">Developed by <Link href="https://chibykes.dev">Chibykes</Link></p>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default Contact;
