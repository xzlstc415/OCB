/** @jsxRuntime classic /
/** @jsx jsx */ jsx;
import { jsx } from "@emotion/react";
import Image from "next/image";

const Container = ({ children }) => (
  <div className="mx-auto md:ml-auto md:mr-0 h-auto md:w-96 md:h-lg md:bg-blue-1 ">
    {children}
  </div>
);

const Absolute = ({ children }) => (
  <div className="block md:absolute top-0 right-0 ">{children}</div>
);

const Flex = ({ children }) => (
  <div className="inline-block md:flex-row-reverse md:flex">{children}</div>
);

const RightAlignedProject = ({children, imageUrl}) => {
  return (
    <Container>
      <Absolute>
        <Flex>
          <div className="mt-10 md:mx-0 md:mr-20 md:mt-20 shadow-featuredProjectRight md:shadow-none">
            <Image
              src={imageUrl}
              width={800}
              height={600}
              objectFit="contain"
            />
          </div>
          <div className="bg-blue-1 ml-auto mr-0 md:bg-white-1 p-4 flex flex-col text-left w-80 mt-5 md:mt-5 md:mr-20 text-lg text-white-1 md:text-black-2">
            {children}
          </div>
        </Flex>
      </Absolute>
    </Container>
  );
};

export default RightAlignedProject;
