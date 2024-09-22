import { productdata } from "@/data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Pathlink from "../_components/pathlink";

const Page = () => {
  return (
    <section className="px-5 md:px-10 py-5 overflow-hidden">
      <div className="flex flex-row gap-2 mb-5">
        <Pathlink title="Home" url="/" />
        <Pathlink title="Women" url="/women" />
      </div>
      <h1 className="text-3xl font-bold mt-5 mb-20">Women's Category</h1>
      <div className="flex flex-wrap basis-auto justify-center gap-10 w-full">
        {productdata.map(
          (
            {
              img,
              title,
              id,
              price,
              gender,
              avaibleColour,
              sizes,
              discount,
              url,
            },
            _id
          ) =>
            gender === "Women" && (
              <div key={_id} className="">
                <div className="relative">
                  <Link href={url} className="">
                    <Image
                      src={img}
                      alt={title}
                      width={300}
                      height={300}
                      className="hover:shadow-lg rounded-lg"
                    />
                  </Link>
                  {discount && (
                    <p className="text-sm font-light p-2 bg-white rounded-full w-max absolute top-2 left-2 shadow-md">
                      {discount}
                    </p>
                  )}
                </div>
                <div className="px-4">
                  <p className="uppercase font-light text-sm mt-2">{gender}</p>
                  <h1 className="text-xl font-bold">{title}</h1>
                  <h3 className="font-semibold">${price}</h3>
                </div>
                <div className="flex gap-2 mt-2 px-4">
                  {avaibleColour.map((color, _id) => (
                    <div className="flex justify-center items-center hover:border-2 hover:border-black h-8 w-8">
                      <div
                        className={cn(
                          color,
                          "flex justify-center items-center h-7 w-7 border border-grey-300 cursor-pointer"
                        )}
                      >
                        <h1 className="hidden">.</h1>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2 mt-2 px-4">
                  {sizes.map((size, _id) => (
                    <div className="flex justify-center items-center ">
                      <div className="flex justify-center items-center p-2 border border-grey-300 hover:border-2 hover:border-black h-8 w-8 cursor-pointer">
                        <h1 className="">{size}</h1>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
        )}
      </div>
    </section>
  );
};

export default Page;
