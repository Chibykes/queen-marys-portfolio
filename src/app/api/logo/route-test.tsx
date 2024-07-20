import Logo from "@/components/Logo";
import { Nunito_Sans } from "next/font/google";
import { ImageResponse } from "next/og";

// Route segment config
export const runtime = 'edge'
 
// Image metadata
export const alt = 'MQ Logo'
export const size = {
  width: 70,
  height: 70,
}
 
export const contentType = 'image/png'


export async function GET() {

  const font = async () => {
    const response = await fetch(new URL("../../Poppins-ExtraBold.ttf", import.meta.url));
    const Poppins =  await response.arrayBuffer();
    return Poppins;
  }

  return new ImageResponse(
    (
      <div
        className=""
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Poppins",
          background: "rgb(226 98 98)",
          paddingTop: "7px",
          color: "#fff",
          fontSize: "2.25rem",
          width: 80,
          height: 70,
        }}
      >
        MQ
      </div>
    ),
    {
      width: 80,
      height: 70,
      fonts: [
        {
          name: "Poppins",
          data: await font(),
          weight: 800,
          style: "normal",
        },
      ],
    }
  );
}
