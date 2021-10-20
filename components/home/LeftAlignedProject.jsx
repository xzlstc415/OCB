/** @jsxRuntime classic /
/** @jsx jsx */ jsx;
import { jsx } from "@emotion/react";
import Image from "next/image";

//const showLeftOrRight = id % 2 === 0 ? "right" : "left";

const Container = ({ children }) => (
  <div className="h-auto mx-auto md:mx-0 md:w-96 md:h-lg md:bg-beige-1 ">
    {children}
  </div>
);

const Absolute = ({ children }) => (
  <div className="block md:absolute top-0 md:left-0">{children}</div>
);

const Flex = ({ children }) => (
  <div className="inline-block md:w-full mx-auto md:flex-row md:flex">
    {children}
  </div>
);

const LeftAlignedProject = ({children, imageUrl}) => {
  return (
    <Container>
      <Absolute>
        <Flex>
          <div className="mx-auto md:mx-0 md:ml-20 mt-20 shadow-featuredProjectLeft md:shadow-none">
            <Image
              src={imageUrl}
              width={800}
              height={600}
              objectFit="contain"
            />
          </div>
          <div className="bg-beige-1 md:bg-white-1 p-4 flex flex-col text-left w-80 mt-5 md:mt-5 md:ml-20 text-lg">
            {children}
          </div>
        </Flex>
      </Absolute>
    </Container>
  );
};

export default LeftAlignedProject;
