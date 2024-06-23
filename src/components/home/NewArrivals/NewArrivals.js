import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import React, { useEffect, useState } from "react";
import { findAll } from '../../../services/products.service';

import {
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
} from "../../../assets/images/index";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";
import cong from '../../../firebase';
// import { getDatabase, ref, onValue } from "firebase/database";
import { getDocs, collection } from "firebase/firestore";

const NewArrivals = () => {
  const [data, setData] = useState([]);


  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };


  const fetchData = async () => {

    const res = await findAll()
console.log(res)
    setData([...res])
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="w-full pb-16">
      <Heading heading="New Arrivals" />
      <Slider {...settings}>

      {data.map((item, index) => (
              
              <div className="px-2" key={index}>
              <Product
                _id="100001"
                img={item.thumbnail}
                productName={item.title}
                price={item.price}
                color={item.varients}
                badge={true}
                des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
              />
              </div>
            ))}    

      </Slider>
    </div>
  );
};

export default NewArrivals;
