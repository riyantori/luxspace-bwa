import React from "react";
import { Link } from "react-router-dom";
import ImgNotFound from "../../assets/img/notfound.jpg";

export default function PageNotFound() {
  return (
    <section class="">
      <div class="container mx-auto my-5">
        <div class="flex flex-col items-center justify-center">
          <div class="w-full md:w-4/12 text-center">
            <img
              className="mb-10"
              src={ImgNotFound}
              alt="congrats illustration"
            />
            <Link
              to="/"
              class="text-gray-900 bg-red-200 focus:outline-none w-full py-3 rounded-full text-lg focus:text-black transition-all duration-200 px-8 cursor-pointer"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
