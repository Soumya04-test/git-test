import React from "react";
import Productcard from "../components/Productcard";


const Shopping = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-center my-5 text-4xl">Shopping Page</h1>
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-8">
      <Productcard
      imgsrc="https://cdn.pixabay.com/photo/2016/11/29/05/08/apple-1867461_1280.jpg"
      title="Iphone"
      description= "Latest Iphone"
      disPrice="149999"
      orgPrice="169999"
      />
      <Productcard 
      imgsrc="https://cdn.pixabay.com/photo/2016/11/29/05/08/apple-1867461_1280.jpg"
      title="Iphone"
      description= "Latest Iphone"
      disPrice="149999"
      orgPrice="169999"
      />
      <Productcard/>
      <Productcard/>
      </div>
    </div>
  );
};

export default Shopping;
