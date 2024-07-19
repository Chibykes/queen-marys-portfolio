"use client";

import emailjs from "@emailjs/browser";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    toast.promise(
      emailjs
        .sendForm("service_o6qt6jj", "template_bzsrbcj", form.current!, {
          publicKey: "xZzJuz5vZmNjL598B",
        })
        .then(() => form.current?.reset()),
      {
        loading: "Sending Mary a mail ✉️...",
        success: "Message sent successfully to Mary 😊",
        error: "Error sending message. Please Try again! 😢",
      }
    );
  };

  return (
    <section
      id="contact"
      className="relative flex flex-col gap-8 bg-slate-50 text-black isolate"
    >
      <Image
        src={"/contact-bg.svg"}
        className="w-full h-full object-cover object-bottom opacity-10 -z-10"
        alt="bg"
        fill
      />
      <div className="py-8 px-4 space-y-2">
        <div
          className="
          max-w-6xl mx-auto h-full py-8 text-center space-y-12
        "
        >
          <div className="space-y-2">
            <p className="text-3xl font-bold">Get in touch</p>
            <p className="text-xs">Let get some work done together.</p>
          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="lg:w-2/5 p-4 mx-auto space-y-4 text-black"
          >
            <input
              name="name"
              type="text"
              className="px-4 py-3 rounded-md border border-neutral-400 w-full bg-transparent"
              placeholder="Name"
            />
            <input
              name="email"
              type="email"
              className="px-4 py-3 rounded-md border border-neutral-400 w-full bg-transparent"
              placeholder="Email"
            />
            <textarea
              name="message"
              className="px-4 py-3 rounded-md border border-neutral-400 w-full bg-transparent h-48"
              placeholder="Message"
            />
            <button
              type="submit"
              className="px-4 py-4 rounded-md bg-black text-white text-sm font-bold w-full"
            >
              Send Message
            </button>
          </form>

          <footer className="text-sm">
            <p className="">&copy; 2024 - Portfolio QueenMary</p>
            <p className="">
              Developed by <Link href="https://chibykes.dev">Chibykes</Link>
            </p>
          </footer>
        </div>
      </div>

      <Toaster
        toastOptions={{
          success: {
            style: {
              background: "#c9eede",
              color: "#378a5d",
            },
          },
          error: {
            style: {
              background: "#ffdcdc",
              color: "#ff6c6c",
            },
          },
          loading: {
            style: {
              background: "#cff3ff",
              color: "#37778a",
            },
          },
        }}
      />
    </section>
  );
};

export default Contact;
