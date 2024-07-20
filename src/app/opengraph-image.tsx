import { ImageResponse } from 'next/og'
 
// Route segment config
export const runtime = 'edge'
 
// Image metadata
export const alt = 'MQ Logo'
export const size = {
  width: 80,
  height: 70,
}
 
export const contentType = 'image/png'
 
// Image generation
export default async function Image() {
  // Font
  const poppins = fetch(
    new URL('./Poppins-ExtraBold.ttf', import.meta.url)
  ).then((res) => res.arrayBuffer())
 
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        className=""
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Poppins",
          background: "rgb(226 98 98)",
          borderRadius: ".5rem",
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
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      fonts: [
        {
          name: 'Poppins',
          data: await poppins,
          style: 'normal',
          weight: 800,
        },
      ],
    }
  )
}