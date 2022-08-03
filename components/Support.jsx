import React from 'react';
import Link from 'next/link';

const Support = () => (
  <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
    <h3 className="text-xl mb-8 font-semibold border-b pb-4">Styrktaraðilar</h3>
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
    <Link href="https://www.steinsteypir.is/">
      <span className="cursor-pointer block border-b pb-3 mb-3">
        Steinsteypir ehf.
      </span>
    </Link>
    <Link href="https://www.spar.is/sparisjodur-s-thingeyinga/">
      <span className="cursor-pointer block border-b pb-3 mb-3">
        Sparisjóður Suður-Þingeyinga
      </span>
    </Link>
    <Link href="https://www.nordlenska.is//">
      <span className="cursor-pointer block border-b pb-3 mb-3">
        Norðlenska
      </span>
    </Link>
  </div>
);

export default Support;
