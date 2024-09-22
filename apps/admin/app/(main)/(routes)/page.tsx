import React from "react";
import Pathlink from "./_components/pathlink";

const Page = () => {
  return (
    <section className="py-5">
      <div>
        <Pathlink title="Home" url="/" />
      </div>
      <h1 className="mt-10">Home</h1>
    </section>
  );
};

export default Page;
