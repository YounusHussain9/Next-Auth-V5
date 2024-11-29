import React from "react";

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col">
      <nav className="bg-black text-white">Iam A Navbar Component</nav>
      {children}
    </div>
  );
};

export default DashBoardLayout;
