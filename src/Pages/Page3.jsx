import React, { useEffect, useState } from "react";
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

  const [wall, setWall] = useState({
    columns: 10,
    tileWidth: 200,
    tileHeight: 300,
    tilt: 16,
  });

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) {
        setWall({ columns: 4, tileWidth: 140, tileHeight: 200, tilt: 10 });
      } else if (w < 1024) {
        setWall({ columns: 6, tileWidth: 170, tileHeight: 250, tilt: 14 });
      } else {
        setWall({ columns: 10, tileWidth: 200, tileHeight: 300, tilt: 16 });
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div className="flex w-full flex-col px-4 pt-8 sm:px-8 md:px-10">
      <h1 className="mb-6 text-center font-[Britannic] text-4xl text-orange-500 sm:text-5xl md:mb-10 md:text-7xl lg:text-8xl">
        Projects
      </h1>
      <div className="h-[55vh] w-full sm:h-[65vh] md:h-[75vh]">
        <DriftWall
          items={items}
          columns={wall.columns}
          tileWidth={wall.tileWidth}
          tileHeight={wall.tileHeight}
          gap={20}
          tilt={wall.tilt}
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
    </div>
  );
};

export default Page3;
