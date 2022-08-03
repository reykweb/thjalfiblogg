import React from 'react';
import Link from 'next/link';

const SocialMedia = () => (
  <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
    <h3 className="text-xl mb-4 font-semibold border-b pb-4">Tenglar</h3>
    <Link href="https://www.facebook.com/thjalfi/">
      <span className="cursor-pointer block border-b pb-3 mb-3 text-blue">
        FACEBOOK
      </span>
    </Link>
    <Link href="https://instagram.com/hestamannafelagid.thjalfi?igshid=YmMyMTA2M2Y=">
      <span className="cursor-pointer block border-b pb-3 mb-3">
        INSTAGRAM
      </span>
    </Link>
    <Link href="https://www.lhhestar.is/">
      <span className="cursor-pointer block border-b pb-3 mb-3">
        Landssamband Hestamannafélaga
      </span>
    </Link>
  </div>
);

export default SocialMedia;
