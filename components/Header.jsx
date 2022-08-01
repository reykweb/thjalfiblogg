import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import { getCategories } from '../services';

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8">

        <div className="md:float-left block md:contents ">
          <img src="./logo.jpg" alt="" className="object-left absolute h-30 w-20   shadow-lg rounded-t-lg lg:rounded-lg z-10 " />
          {/* <span className="block md:float-center cursor-pointer font-bold text-4xl text-white ml-20 mt-10">Hestamannafélagið Þjálfi</span> */}
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white ml-20 mt-10">Hestamannafélagið Þjálfi</span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}><span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">{category.name}</span></Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
