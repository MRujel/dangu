import React from 'react';
import swimming from "../assets/swimming.png"
import playground from "../assets/playground.png"
import classimg from "../assets/class.png"

const Qzone = () => {
    return (
      <div className="bg-base-200 p-3 ">
        <h2 className="mb-5 font-bold">Qzone</h2>
        <div className='space-y-5'>
          <img src={swimming} alt="" />
          <img src={playground} alt="" />
          <img src={classimg} alt="" />
        </div>
      </div>
    );
};

export default Qzone;