import React from "react";

const Hero = () => {
  return (
    <div className="w-full bg-purple-400">
      <div className="  max-w-11/12  mx-auto text-center space-y-4 py-4 ">
        <h1 className="text-4xl text-white font-bold">Dashboard</h1>
        <p className="text-white">
          Explore the newest gadgets that will make your experience even better.
          From smart devices to <br /> cool accessories — we’ve got it all!
        </p>
        <div>
          <button className="px-6 font-semibold py-1 text-purple-600 text-sm rounded-full bg-white mr-2">
            Cart
          </button>
          <button className="border border-white px-6 py-1 text-sm text-white rounded-full bg-purple-600 mr-2">
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
