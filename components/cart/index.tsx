"use client";

export default function Cart(handler) {
  return (
    <div className="absolute z-50 bg-black/20 top-0  h-full w-full ">
      <div className="absolute bg-gray-100 h-full w-1/4 right-0">
        <div className="bg-white flex gap-2 p-4">
          <button onClick={() => handler}> {"<-"} </button>
          <h1 className="text-lg"> WinerBox(0) </h1>
        </div>

        <div className="h-1/4 flex flex-col justify-center items-center p-8">
          <span> = {"("} </span>
          <h3 className="font-bold text-lg text-center ">
            Você ainda não escolheu nenum produto
          </h3>
        </div>
      </div>
    </div>
  );
}
