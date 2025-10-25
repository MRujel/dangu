import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Newscard from '../Components/Newscard';

const CategoryNews = () => {
    const {id} = useParams()
    const data = useLoaderData()
    const [categoryNews, setCategoryNews] = useState([]);
    useEffect(() => {

        if((id)=="0"){
            setCategoryNews(data);
            return
        }
        else if(id == "1"){
       
          const filteredNews = data.filter((news) => {
            return news.others.is_today_pick == true;
          });
          setCategoryNews(filteredNews);
        }
      else{
        const filteredNews = data.filter((news) => {
            return news.category_id == Number(id);
          });
          console.log(filteredNews);
          setCategoryNews(filteredNews);
        }
        }, [data, id]);
      
    
    return (
      <div>
        <h2 className="font-bold mb-5">
          Total: <span className="text-secondary">{categoryNews.length}</span>{" "}
          News Found
        </h2>
        <div className="grid grid-cols-1 gap-5">
          {categoryNews.map((news) => {
            return <Newscard key={news.id} news={news}></Newscard>;
          })}
        </div>
      </div>
    );
};

export default CategoryNews;