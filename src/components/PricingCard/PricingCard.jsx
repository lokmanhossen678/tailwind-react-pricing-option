import React from "react";
import PricingFeature from "./PricingFeature";

const PricingCard = ({ pricing }) => {
const {name, price, description, features}=pricing;
  return (
    <div>
      {/* Card Header */}
      <div className=" flex-col border bg-amber-800 rounded-2xl p-4 gap-3">
        <h1 className="text-7xl">{name}</h1>
        <h4 className="text-3xl">{price}</h4>
        {/* Car Body */}
        <div className="bg-amber-400 p-2 rounded-2xl m-2.5 flex-1">
            <p>{description}</p>
            {features.map((feature, index)=><PricingFeature 
            key={index} 
            feature={feature}></PricingFeature>)}
        </div>
        <button className="btn w-full mt-3">Subscribe</button>

      </div>
    </div>
  );
};

export default PricingCard;
