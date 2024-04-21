import React, { FC, PropsWithChildren } from "react";

const PageWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='flex items-center justify-start flex-col p-10 w-screen h-screen'>
      {children}
    </div>
  );
};

export default PageWrapper;
