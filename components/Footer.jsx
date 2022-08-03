import React from 'react';
import Image from 'next/image';

const Footer = () => (
  <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">
    <div className="absolute left-0 right-0 -top-14">
      <Image
        unoptimized
        alt="Þjálfi"
        height="100px"
        width="100px"
        className="align-middle rounded-full"
        src="../logo.jpg"
      />
    </div>
    <h3 className="text-white mt-4 mb-4 text-4xl font-bold">Þjálfi</h3>
    <p className="text-white text-xs">&copy; Reykweb 2022</p>
  </div>
);

export default Footer;
