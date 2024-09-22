import React from "react";

const AuthLayout = ({ children }: AuthlayoutProps) => {
  return (
    <main className="flex justify-center items-center mt-20 md:mt-32">
      {children}
    </main>
  );
};

export default AuthLayout;
