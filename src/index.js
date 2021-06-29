import React from "react";
import ReactDOM from "react-dom";

const randomPic = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favorite Foods
    </h1>
    <img src={randomPic + "?grayscale"} alt="random" />
    <ul>
      <img
        className="food-image"
        alt="pasta"
        src="https://d1e3z2jco40k3v.cloudfront.net/-/media/mccormick-us/recipes/espanol/800x800/ensalada_de_pasta_con_vinagreta_recipes_800x800.jpg"
      ></img>
      <img
        className="food-image"
        alt="panini"
        src="https://noshingwiththenolands.com/wp-content/uploads/2012/08/August-2012-0141-720x405.jpg"
      ></img>
      <img
        className="food-image"
        alt="salad"
        src="https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FSeries%2F2021-01-tonight-we-veg-italian-chopped-salad%2FItalianChoppedSaladOption9"
      ></img>
    </ul>
  </div>,
  document.getElementById("root")
);
