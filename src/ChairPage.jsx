import React, { useState } from "react";
import Slider from "@mui/material/Slider";
const chairs = [
  {
    name: "Luxury King Bed",
    price: 12999,
    oldPrice: 27999,
    rating: 4.2,
    material: "Solid Wood",
    dimension: "King",
    type: "Storage Bed",
    img: "https://rukminim1.flixcart.com/image/1280/1280/xif0q/dining-chair/c/c/j/36-1-na-velvet-45-15-velvet-dining-chairs-dunkiet-88-parrot-original-imahbznwdpfbdvrb.jpeg?q=90",
},
  {
    name: "Modern Queen Bed",
    price: 15999,
    oldPrice: 32999,
    rating: 4.5,
    material: "Engineered Wood",
    dimension: "Queen",
    type: "Platform Bed",
    img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS4POcWL8FEKV-VU6nEsipKRXk93N7veU1Kxm6rr60gQylA-xR2lUvxjd2OyVEq9EfxIlo5h2Id8hBzv_ygRM6CQl9C6gx6xLmmbuBUz1U",
},
];

const ChairPage = () => {

const [priceRange, setPriceRange] = useState([5000, 50000]);
const [selectedMaterial, setSelectedMaterial] = useState("");
const [selectedDimension, setSelectedDimension] = useState("");
const [selectedType, setSelectedType] = useState("");
const [selectedRating, setSelectedRating] = useState(0);
const handleChange = (event, newValue) => {
    setPriceRange(newValue);
  };
const filteredChairs = chairs.filter((chair) => {
  return (
    chair.price >= priceRange[0] &&
    chair.price <= priceRange[1] &&
    (selectedMaterial === "" || chair.material === selectedMaterial) &&
    (selectedDimension === "" || chair.dimension === selectedDimension) &&
    (selectedType === "" || chair.type === selectedType) &&
    (selectedRating === 0 || chair.rating >= selectedRating)
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
          {filteredChairs.length === 0 ? (
  <div className="col-12 text-center py-5">
    <h4>No Furniture Found 😕</h4>
    <p className="text-muted">
      Try changing your filters or price range
    </p>
  </div>
) : (
  filteredChairs.map((chair, index) => (
    <div className="col-md-4 mb-4" key={index}>
      <div className="card h-100 shadow-sm">
        <div className="position-relative">
          <img
            src={chair.img}
            alt={chair.name}
            className="card-img-top"
            style={{ height: "250px", objectFit: "cover" }}
          />

          <button className="btn btn-light position-absolute top-0 end-0 m-2">
            ♡
          </button>
        </div>

        <div className="card-body">
          <h6>{chair.name}</h6>

          <div className="mb-2">
            <span className="badge bg-success">
              {chair.rating} ★
            </span>
          </div>

          <h5>₹{chair.price}</h5>
          <del className="text-muted">₹{chair.oldPrice}</del>

          <p className="text-success mt-2">
            {Math.round(
              ((chair.oldPrice - chair.price) / chair.oldPrice) * 100
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
export default ChairPage;

