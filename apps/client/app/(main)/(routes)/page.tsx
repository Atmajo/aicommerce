import { Button } from "@/components/ui/button";
import { herodata, productdata } from "@/data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="px-10 py-5 overflow-hidden" id="home">
      <div className="">
        {herodata.map(({ img, gender, tag, bg }, _id) => (
          <div
            key={_id}
            className={cn(
              bg,
              "flex justify-center items-center gap-40 w-full h-full"
            )}
          >
            <div className="flex flex-col gap-10">
              <p className="font-light">{gender}</p>
              <h1 className="text-6xl font-bold leading-[80px] w-[80%]">
                {tag}
              </h1>
              <div>
                <Button>Shop Collections</Button>
              </div>
            </div>
            <div>
              <Image
                src={"/bg-balls.svg"}
                alt="bg-balls"
                width={900}
                height={900}
                className="absolute top-20 right-32 -rotate-[28deg]"
              />
              <Image
                src={img}
                alt="hero"
                width={600}
                height={600}
                className="relative"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col justify-center items-center my-20">
        <p className="font-light text-center">Summer Collection</p>

        <h1 className="text-3xl font-bold mt-5 mb-20">Popular T-Shirts</h1>
        <div className="flex flex-row justify-center gap-5 w-full">
          {productdata.map(
            (
              {
                img,
                title,
                price,
                url,
                gender,
                discount,
                avaibleColour,
                sizes,
              },
              _id
            ) => (
              <div key={_id} className="">
                <div className="relative">
                  <Link href={url}>
                    <Image
                      src={img}
                      alt={title}
                      width={300}
                      height={300}
                      className=""
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
                    <div className="flex justify-center items-center hover:border-2 hover:border-black h-6 w-6 p-1">
                      <div
                        className={cn(
                          color,
                          "flex justify-center items-center p-2 border border-grey-300 cursor-pointer"
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
      </div>
    </section>
  );
}
