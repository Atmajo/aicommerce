import React from "react";
import Pathlink from "../_components/pathlink";

const Page = () => {
  return (
    <section className="px-5 md:px-10 py-5 overflow-hidden">
      <div className="flex flex-row gap-2 mb-5">
        <Pathlink title="Home" url="/" />
        <Pathlink title="Cart" url="/cart" />
      </div>
      <h1 className="text-3xl font-bold mt-5 mb-20">Cart</h1>
    </section>
  );
};

export default Page;
