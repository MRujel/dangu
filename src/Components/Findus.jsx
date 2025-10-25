import React from 'react';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

const FindUs = () => {
    return (
      <div>
        <h2 className="font-bold mb-5">Find Us On</h2>
        <div>
          <div className="join join-vertical w-full ">
            <button className="btn join-item bg-white justify-start"><FaFacebook></FaFacebook> Facebook</button>
            <button className="btn join-item bg-white justify-start"><BsTwitter></BsTwitter> Twitter</button>
            <button className="btn join-item bg-white justify-start"><BsInstagram></BsInstagram> Instagram</button>
          </div>
        </div>
      </div>
    );
};

export default FindUs;