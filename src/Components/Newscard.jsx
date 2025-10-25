import React from 'react';

import { FaStar, FaEye, FaShareAlt, FaBookmark } from "react-icons/fa";

const Newscard = ({ news }) => {
  const { title, rating, total_view, author, thumbnail_url, details } = news;

  const formattedDate = new Date(author.published_date).toLocaleDateString(
    "en-GB",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <div className="card bg-base-100 shadow-md border border-base-200">
      {/* Author Header */}
      <div className="flex items-center justify-between p-4 bg-base-200">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src={author.img} alt={author.name} />
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-base">{author.name}</h3>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>

        <div className="flex gap-3 text-gray-500">
          <FaBookmark className="cursor-pointer hover:text-primary" />
          <FaShareAlt className="cursor-pointer hover:text-primary" />
        </div>
      </div>

      {/* Title */}
      <h2 className="px-4 font-bold text-lg text-gray-900 leading-snug">
        {title}
      </h2>

      {/* Thumbnail */}
      <figure className="px-4 pt-3">
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-xl w-full h-56 object-cover"
        />
      </figure>

      {/* Details */}
      <div className="px-4 py-3 text-gray-600 text-sm">
        <p>{details.length > 180 ? details.slice(0, 180) + "..." : details}</p>
        <button className="text-primary font-semibold mt-1">Read More</button>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 py-3 border-t border-base-200">
        <div className="flex items-center gap-1 text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`${
                i < rating.number ? "text-yellow-500" : "text-gray-300"
              }`}
            />
          ))}
          <span className="text-gray-700 ml-1 font-medium">
            {rating.number}
          </span>
        </div>

        <div className="flex items-center gap-2 text-gray-500">
          <FaEye />
          <span>{total_view.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default Newscard;
