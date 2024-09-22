"use client";

import { cartVal, productdata } from "@/data";
import Image from "next/image";
import React from "react";
import Pathlink from "../../_components/pathlink";
import Reviewstars from "../../_components/reviewstars";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Productfaqs from "../../_components/productfaqs";

const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Page = ({ params }: ProductProps) => {
  const handleCart = (): void => {
    //cart handling
    cartVal + 1;
  };

  const handleWishlist = (): void => {
    //wishlist handling
  };

  return (
    <div className="px-5 md:px-10 py-5 overflow-hidden">
      <div className="flex flex-row gap-2 mb-5">
        <Pathlink title="Home" url="/" />
        <Pathlink title="Shop" url="/shop" />
        <Pathlink title="Product" />
      </div>
      <div>
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
              review,
              faqs,
            },
            _id
          ) =>
            id === params.productId && (
              <div
                key={_id}
                className="flex flex-col md:flex-row gap-10 md:gap-20"
              >
                <div className="flex flex-col gap-4">
                  <Image
                    src={img}
                    alt="id"
                    width={450}
                    height={450}
                    className="rounded-xl"
                  />
                  <Reviewstars review={review} />
                </div>
                <div>
                  <h1 className="text-2xl font-bold capitalize">{title}</h1>
                  <p className="text-muted-foreground text-sm mb-5">{gender}</p>
                  <hr />
                  <p className="text-xl font-semibold mt-5">${price}</p>
                  <div className="flex gap-2 mt-5">
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
                  <div className="flex mt-5 gap-2">
                    {sizes.map((size, _id) => (
                      <div className="flex justify-center items-center ">
                        <div className="flex justify-center items-center p-2 border border-grey-300 hover:border-2 hover:border-black h-8 w-8 cursor-pointer">
                          <h1 className="">{size}</h1>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-5">
                    <h1 className="text-lg font-semibold ">Quantity</h1>
                    <select
                      name=""
                      id=""
                      className="bg-[#1F1F1F] px-2 py-1 rounded-lg text-white"
                    >
                      {arr.map((idx) => (
                        <option value={idx}>{idx}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-row gap-5 mt-10">
                    <Button
                      className="px-5 py-1 uppercase font-semibold"
                      variant={"destructive"}
                      onClick={handleCart}
                    >
                      Add to Cart
                    </Button>
                    <Button
                      className="flex flex-row justify-center items-center gap-2 px-5 py-1 uppercase font-semibold"
                      onClick={handleWishlist}
                    >
                      <span className="text-3xl">♡</span> Add to wishlist
                    </Button>
                  </div>
                  <div className="mt-5">
                    {faqs.map(({ q, a }) => (
                      <Productfaqs q={q} a={a} />
                    ))}
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Page;
