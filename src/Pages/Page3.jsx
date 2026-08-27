import React from "react";
import DriftWall from "./../components/DriftWall";

const Page3 = () => {
  const items = [
    {
      image: "https://picsum.photos/id/1015/600/400",
      title: "Peaks",
      href: "https://example.com/one",
    },
    {
      image: "https://picsum.photos/id/1025/600/400",
      title: "Pup",
      href: "https://example.com/two",
    },
    {
      image: "https://picsum.photos/id/1039/600/400",
      title: "Falls",
      href: "https://example.com/three",
    },
  ];

  return (
    <>
      <div className="w-full h-screen px-10">
        <h1 className="text-8xl text-center -mt-20 mb-10 font-[Britannic] text-orange-500">
          Projects
        </h1>
        <DriftWall
          items={items}
          columns={10}
          tileWidth={200}
          tileHeight={300}
          gap={20}
          tilt={16}
          turn={-14}
          perspective={2000}
          depth={200}
          speed={20}
          direction="up"
          variance={0.45}
          parallax={0.6}
          lift={64}
          fade={0.6}
          dim={1}
          overlayColor="#060010"
          radius={14}
          roll={0}
          pauseOnHover={false}
          grayscale={false}
        />
      </div>
    </>
  );
};

export default Page3;
