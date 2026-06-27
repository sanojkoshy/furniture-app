import React, { useState } from "react";
import Slider from "@mui/material/Slider";
const diningSets = [
  {
    name: "Luxury King Bed",
    price: 12999,
    oldPrice: 27999,
    rating: 4.2,
    material: "Solid Wood",
    dimension: "King",
    type: "Storage Bed",
    img: "https://rukminim1.flixcart.com/image/1280/1280/xif0q/dining-set/e/t/4/-original-imahh7t9whhdvsdj.jpeg?q=90",
},
  {
    name: "Modern Queen Bed",
    price: 15999,
    oldPrice: 32999,
    rating: 4.5,
    material: "Engineered Wood",
    dimension: "Queen",
    type: "Platform Bed",
    img: "https://rukminim1.flixcart.com/image/1280/1280/xif0q/dining-set/s/0/w/-original-imahh5k8zwha9pg2.jpeg?q=90",
  },
];

const DiningPage = () => {

const [priceRange, setPriceRange] = useState([5000, 50000]);
const [selectedMaterial, setSelectedMaterial] = useState("");
const [selectedDimension, setSelectedDimension] = useState("");
const [selectedType, setSelectedType] = useState("");
const [selectedRating, setSelectedRating] = useState(0);
const handleChange = (event, newValue) => {
    setPriceRange(newValue);
  };
const filteredDiningSets = diningSets.filter((diningSet) => {
  return (
    diningSet.price >= priceRange[0] &&
    diningSet.price <= priceRange[1] &&
    (selectedMaterial === "" || diningSet.material === selectedMaterial) &&
    (selectedDimension === "" || diningSet.dimension === selectedDimension) &&
    (selectedType === "" || diningSet.type === selectedType) &&
    (selectedRating === 0 || diningSet.rating >= selectedRating)
  );
});
const materials = ["Solid Wood", "Engineered Wood", "Metal", "Teak Wood"];
const dimensions = ["Single", "Queen", "King"];
const types = ["Storage Bed", "Platform Bed", "Bunk Bed", "Sofa Cum Bed"];
const ratings = [1, 2, 3, 4, 5];

  return (
    <div className="container-fluid py-4">
      <div className="row">

        {/* LEFT FILTER SIDEBAR */}
        <div className="col-lg-3">
  <div className="card p-4 shadow-sm">
    <h4>Filters</h4>
    <hr />

    {/* PRICE */}
    <h6>Price Range</h6>

      <Slider
        value={priceRange}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={5000}
        max={50000}
        step={1000}
      />
      <div className="d-flex justify-content-between fw-bold">
        <span>₹{priceRange[0]}</span>
        <span>₹{priceRange[1]}</span>
      </div>


    <hr />
    
 <h6>Material</h6>
{materials.map((material) => (
  <div key={material}>
    <input
      type="checkbox"
      name="material"
      onChange={() => setSelectedMaterial(material)}
    />
    {" "}{material}
  </div>
))}

    <hr />

    {/* DIMENSIONS */}
        <h6>Dimensions</h6>
{dimensions.map((dimension) => (
  <div key={dimension}>
    <input
      type="checkbox"
      name="dimension"
      onChange={() => setSelectedDimension(dimension)}
    />
    {" "}{dimension}
  </div>
))}
  
    <hr />

    {/* BED TYPE */}
    <h6>Type</h6>
    {types.map((type) => (
  <div key={type}>
    <input
      type="checkbox"
      name="type"
      onChange={() => setSelectedType(type)}
    />
    {" "}{type}
  </div>
))}
    
     <hr />

    {/* RATING */}
    <h6>Ratings</h6>
     {ratings.map((rating) => (
  <div key={rating}>
    <input
      type="checkbox"
      name="rating"
      onChange={() => setSelectedRating(rating)}
    />
    {" "}{rating} ★
  </div>
))}
</div>
</div>



        {/* RIGHT PRODUCTS */}
        <div className="col-lg-9">
          <div className="row">
          {filteredDiningSets.length === 0 ? (
  <div className="col-12 text-center py-5">
    <h4>No Furniture Found 😕</h4>
    <p className="text-muted">
      Try changing your filters or price range
    </p>
  </div>
) : (
  filteredDiningSets.map((diningSet, index) => (
    <div className="col-md-4 mb-4" key={index}>
      <div className="card h-100 shadow-sm">
        <div className="position-relative">
          <img
            src={diningSet.img}
            alt={diningSet.name}
            className="card-img-top"
            style={{ height: "250px", objectFit: "cover" }}
          />

          <button className="btn btn-light position-absolute top-0 end-0 m-2">
            ♡
          </button>
        </div>

        <div className="card-body">
          <h6>{diningSet.name}</h6>

          <div className="mb-2">
            <span className="badge bg-success">
              {diningSet.rating} ★
            </span>
          </div>

          <h5>₹{diningSet.price}</h5>
          <del className="text-muted">₹{diningSet.oldPrice}</del>

          <p className="text-success mt-2">
            {Math.round(
              ((diningSet.oldPrice - diningSet.price) / diningSet.oldPrice) * 100
            )}% Off
          </p>
        </div>
      </div>
    </div>
  ))
)}
          </div>
          </div>
        </div>
        </div>
      
  );
};
export default DiningPage;

