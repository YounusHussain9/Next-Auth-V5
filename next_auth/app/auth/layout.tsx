import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col">
      <nav className="bg-black text-white">This is our Auth Navbar</nav>
      {children}
    </div>
  );
};

export default AuthLayout;
