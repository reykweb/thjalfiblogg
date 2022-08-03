import React from 'react';

import Link from 'next/link';

const Footer = () => {
  const something = 0;
  console.log(something);
  return (

    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-4 font-semibold border-b pb-4">Tenglar</h3>
      <Link href="https://www.facebook.com">
        <span className="cursor-pointer block border-b pb-3 mb-3 text-sky-700">
          FACEBOOK
        </span>
      </Link>
      <Link href="https://www.instagram.com">
        <span className="cursor-pointer block border-b pb-3 mb-3">
          INSTAGRAM
        </span>
      </Link>
      <Link href="https://www.lhhestar.is/">
        <span className="cursor-pointer block border-b pb-3 mb-3">
          Landssamband Hestamannafélaga
        </span>
      </Link>
      <h3 className="text-xl mb-4 font-semibold border-b pb-4 mt-4 pt-4">Styrktaraðilar</h3>
      <Link href="https://www.samherji.is">
        <span className="cursor-pointer block border-b pb-3 mb-3">
          Samherji
        </span>
      </Link>
      <Link href="https://www.lifland.is">
        <span className="cursor-pointer block border-b pb-3 mb-3">
          Lífland
        </span>
      </Link>
      <Link href="https://www.landsvirkjun.is">
        <span className="cursor-pointer block border-b pb-3 mb-3">
          Landsvirkjun
        </span>
      </Link>
      <Link href="/">
        <span className="cursor-pointer block border-b pb-3 mb-3">
          R&M ehf.
        </span>
      </Link>
      <Link href="https://www.https://steinsteypir.is/">
        <span className="cursor-pointer block border-b pb-3 mb-3">
          Steinsteypir ehf.
        </span>
      </Link>
    </div>

  );
};

export default Footer;
