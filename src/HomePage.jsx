import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const slides = [
  {
    img: "https://cdn.pixabay.com/photo/2016/08/26/15/06/home-1622401_1280.jpg",
    eyebrow: "New Season",
    title: "Modern Furniture\nCollection",
    sub: "Up to 40% Off",
  },
  {
    img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?fm=jpg&q=80&w=1600&auto=format&fit=crop",
    eyebrow: "Dining",
    title: "Gather Around\nThe Table",
    sub: "Handcrafted in oak",
  },
  {
    img: "https://static.vecteezy.com/system/resources/thumbnails/028/207/246/small_2x/hotel-lobby-with-scandinavian-style-furniture-profesionalgrapy-ai-generated-photo.jpg",
    eyebrow: "Bedroom",
    title: "Quiet Mornings,\nSoft Light",
    sub: "From $899",
  },
];

const categories = [
    { name: "Sofa", img: "https://i.pinimg.com/736x/88/a4/fd/88a4fde7ebe858d6a1d9852775ffb783.jpg" },
    { name: "Beds", img: "https://i.pinimg.com/1200x/2e/0f/1a/2e0f1a4a44fd175436a216d5fddc30ba.jpg" },
    { name: "Dining", img: "https://i.pinimg.com/736x/a3/10/9a/a3109ade9e40d1c39fa3712d2c658cc0.jpg" },
    { name: "Chair", img: "https://i.pinimg.com/736x/b7/27/4c/b7274c664460ac0284b791a3f93fc748.jpg" },
    { name: "Wardrobe", img: "https://i.pinimg.com/736x/db/3d/f9/db3df9badf44fae9ebde29113fc17030.jpg" },
    { name: "Office", img: "https://i.pinimg.com/736x/48/ba/2c/48ba2ccaaa764a63001405f22a0a5b7a.jpg" },
];
const products = [
    { name: "Lune Curved Sofa", price: 1899, rating: 4.9, img: "https://i.pinimg.com/736x/21/0c/3a/210c3a47653ef99051df2285e4df8b0a.jpg" },
    { name: "Teak Lounge Chair", price: 649, rating: 4.8, img: "https://i.pinimg.com/736x/06/23/51/06235178b2b24e274a829bc0918a476e.jpg" },
    { name: "Sculpt Coffee Table", price: 489, rating: 4.7, img: "https://i.pinimg.com/1200x/7a/5f/1b/7a5f1bb164d8376f134b68f113222b60.jpg" },
    { name: "Brass Floor Lamp", price: 229, rating: 4.6, img: "https://i.pinimg.com/736x/99/98/5f/99985f88ff08d194e5314ad933da30cf.jpg" },
];
const offers = [
  {
    name: "Luxury Sofa",
    price: "$799",
    oldPrice: "$999",
    img: "https://i.pinimg.com/736x/88/a4/fd/88a4fde7ebe858d6a1d9852775ffb783.jpg"
  },
  {
    name: "Modern Bed",
    price: "$599",
    oldPrice: "$799",
    img: "https://i.pinimg.com/1200x/2e/0f/1a/2e0f1a4a44fd175436a216d5fddc30ba.jpg"
  }
];

export default function HomePage() {
    const [timeLeft, setTimeLeft] = useState({
  hours: 12,
  minutes: 45,
  seconds: 30,
});

useEffect(() => {
  const timer = setInterval(() => {
    setTimeLeft((prev) => {
      let { hours, minutes, seconds } = prev;

      if (seconds > 0) {
        seconds--;
      } else if (minutes > 0) {
        minutes--;
        seconds = 59;
      } else if (hours > 0) {
        hours--;
        minutes = 59;
        seconds = 59;
      }

      return { hours, minutes, seconds };
    });
  }, 1000);

  return () => clearInterval(timer);
}, []);
    const [slide, setSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setSlide((current) => (current + 1) % slides.length);
        }, 4500);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="min-h-screen bg-white pb-12 text-slate-900">
           <header className="sticky-top bg-white border-bottom">
  <div className="container py-3">

  {/* Row 1 : Brand + Location */}
 {/* Row 1 : Brand + Location */}
<div className="d-flex justify-content-between align-items-center mb-3">

  {/* Left Side - Brand */}
  <div className="d-flex align-items-center gap-2">
    {/* Circle Logo */}
    <div
      style={{
        width: "45px",
        height: "45px",
        borderRadius: "50%",
        backgroundColor: "#111",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontWeight: "bold",
        fontSize: "20px",
      }}
    >
      S
    </div>

    {/* Text */}
    <div>
      <h5 className="mb-0">SANKY</h5>
      <small className="text-muted">FURNITURE</small>
    </div>
  </div>

  {/* Right Side - Location */}
  <div className="text-end">
    <span className="me-2">📍</span>
    <span className="fw-semibold me-2">Location not set</span>
    <a href="#" className="text-decoration-none">
      Select delivery location
    </a>
  </div>

</div>
       

  {/* Row 2 : Search + Buttons */}
  <div className="row align-items-center">

    <div className="col-md-8">
      <div className="input-group">
        <span className="input-group-text">🔍</span>
        <input
          type="text"
          className="form-control"
          placeholder="Search sofas, beds, decor..."
        />
      </div>
    </div>

    <div className="col-md-4">
      <div className="d-flex justify-content-end gap-2">

        <button className="btn btn-outline-secondary">
           Login
        </button>

        <button className="btn btn-outline-secondary">
          ♥ Wishlist
        </button>

        <button className="btn btn-dark">
          🛒 Cart
        </button>

      </div>
    </div>

  </div>

</div>
</header>

            <main className="mx-auto max-w-5xl px-5 pt-5 space-y-10">
    <section>
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div
          className="position-relative overflow-hidden rounded"
          style={{ height: "300px" }}
        >
          {slides.map((slideItem, index) => (
            <img
              key={index}
              src={slideItem.img}
              alt={slideItem.title}
              className={`position-absolute top-0 start-0 w-100 h-100 ${
                index === slide ? "opacity-100" : "opacity-0"
              }`}
              style={{
                objectFit: "cover",
                objectPosition: "center",
                transition: "opacity 0.7s ease"
              }}
            />
          ))}

          <div
            className="position-absolute bottom-0 start-0 text-white p-4"
            style={{ zIndex: 10 }}
          >
            <h2>{slides[slide].title}</h2>
            <p>{slides[slide].sub}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="mt-5">
  <div className="container">

    <div className="d-flex justify-content-between align-items-center mb-4">
      <h2>🔥 Limited Time Offer</h2>

      <div className="bg-danger text-white px-3 py-2 rounded">
        {String(timeLeft.hours).padStart(2, "0")} :
        {String(timeLeft.minutes).padStart(2, "0")} :
        {String(timeLeft.seconds).padStart(2, "0")}
      </div>
    </div>

    <div className="row">
      {offers.map((item, index) => (
        <div className="col-md-6 mb-4" key={index} style={{ height: "200px" }}>
          <div className="card shadow-sm" style={{ height: "200px" }} >
            <div className="row g-0" style={{ height: "200px" }}>
              <div className="col-4" style={{ height: "200px" }}>
                <img
                  src={item.img}
                  alt={item.name}
                  className="img-fluid h-100"
                    style={{ objectFit: "cover" }}
                />
              </div>

              <div className="col-8"  >
                <div className="card-body" >
                  <h5>{item.name}</h5>

                  <p className="mb-1">
                    <span className="fw-bold text-danger">
                      {item.price}
                    </span>
                  </p>

                  <del className="text-muted">
                    {item.oldPrice}
                  </del>

                  <br />

                  <button className="btn btn-dark mt-3">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>

   <section>
  <div className="container mt-5">
    <div className="row mb-3">
      <div className="col">
        <h2>Shop by Category</h2>
      </div>
    </div>

    <div className="row">
    {categories.map((category) => (
  <div className="col-6 col-md-4 col-lg-2 mb-4">
  <Link

  to={
    category.name === "Beds"
      ? "/beds"
      : category.name === "Sofa"
      ? "/sofa"
       : category.name === "dining"
      ? "/dining" 
      : category.name === "chair"
      ? "/chair"
      : "/wardrobe"

  }
  >
    <div className="card h-100">
      <img
        src={category.img}
        alt={category.name}
        className="card-img-top"
        style={{ height: "120px", objectFit: "cover" }}
      />
      <div className="card-body text-center">
        <h6>{category.name}</h6>
      </div>
    </div>
  </Link>
</div>
))}
    </div>
  </div>
</section>
<section className="mt-5">
  <div className="container">

    <div className="row mb-4">
      <div className="col">
        <h2>✨ New Arrivals</h2>
      </div>
    </div>

    <div className="row">
      {products.map((product) => (
        <div
          key={product.name}
          className="col-12 col-md-6 col-lg-3 mb-4"
        >
          <ProductCard {...product} />
        </div>
      ))}
    </div>

  </div>
</section>

<section>
  <div className="container mt-5">
    <div className="row mb-3">
      <div className="col">
        <h2>Best Sellers</h2>
      </div>
    </div>

    <div className="row">
      {products.map((product) => (
        <div
          key={product.name}
          className="col-12 col-sm-6 col-lg-3 mb-4"
        >
          <ProductCard {...product} />
        </div>
      ))}
    </div>
  </div>
</section>
<section className="py-5">
  <div className="container">

    <div
      className="card border-0 shadow-lg overflow-hidden"
      style={{ borderRadius: "24px" }}
    >
      <div className="row g-0">

        {/* LEFT SIDE - CONTACT */}
        <div className="col-lg-5 p-5 d-flex flex-column justify-content-center">

          <h1 className="fw-bold mb-4">Contact Us</h1>

          <p className="text-muted mb-4">
            Visit our showroom and explore our premium furniture collection.
          </p>

          <div className="mb-4">
            <h6 className="text-uppercase text-muted">Office</h6>
            <p className="fw-semibold mb-1">Maison Furniture</p>
            <p className="mb-1">MG Road, Ernakulam</p>
            <p>Kochi, Kerala 682011</p>
          </div>

          <div className="mb-4">
            <h6 className="text-uppercase text-muted">Email</h6>
            <p>support@maison.com</p>
          </div>

          <div>
            <h6 className="text-uppercase text-muted">Phone</h6>
            <p>+91 98765 43210</p>
          </div>

        </div>

        {/* RIGHT SIDE - MAP */}
        <div className="col-lg-7">

          <div
            className="position-relative h-100"
            style={{ minHeight: "500px" }}
          >

            <iframe
              title="Maison Furniture Location"
              src="https://maps.google.com/maps?q=MG+Road+Ernakulam+Kochi&z=15&output=embed"
              width="100%"
              height="100%"
              style={{
                border: 0,
                minHeight: "500px"
              }}
            />

            {/* Location Pin */}
            <div
              className="position-absolute"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -100%)",
                fontSize: "45px",
                zIndex: 1000,
                pointerEvents: "none"
              }}
            >
              📍
            </div>

          </div>

        </div>

      </div>
    </div>

  </div>
</section>
<footer className="bg-dark text-light mt-5 py-5">
  <div className="container">
    <div className="row">

      {/* About Us */}
      <div className="col-md-4 mb-4">
        <h5>About Us</h5>
        <p className="text-secondary">
          Maison is your destination for premium furniture and home décor.
          We bring modern, elegant, and comfortable designs to transform
          your living space.
        </p>
      </div>

      {/* Mail Us */}
      <div className="col-md-4 mb-4">
        <h5>Mail Us</h5>
        <p className="mb-1">📧 support@maison.com</p>
        <p className="mb-1">📞 +91 98765 43210</p>
        <p>🏢 Kochi, Kerala, India</p>
      </div>

      {/* Social Media */}
      <div className="col-md-4 mb-4">
        <h5>Follow Us</h5>

        <div className="d-flex gap-3 mt-3">
          <a href="#" className="text-light text-decoration-none">
            📘 Facebook
          </a>
        </div>

        <div className="d-flex gap-3 mt-2">
          <a href="#" className="text-light text-decoration-none">
            📸 Instagram
          </a>
        </div>

        <div className="d-flex gap-3 mt-2">
          <a href="#" className="text-light text-decoration-none">
            🐦 Twitter
          </a>
        </div>

        <div className="d-flex gap-3 mt-2">
          <a href="#" className="text-light text-decoration-none">
            💼 LinkedIn
          </a>
        </div>
      </div>

    </div>

    <hr className="border-secondary" />

    <div className="text-center text-secondary">
      © 2026 Maison Furniture. All Rights Reserved.
    </div>
  </div>
</footer>
            </main>
        </div>
    );
}

function SectionHeader({ title }) {
    return (
        <div className="flex items-end justify-between">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <button className="text-xs font-semibold uppercase tracking-widest text-slate-500 hover:text-slate-700">
                See all
            </button>
        </div>
    );
}

function IconBtn({ children, label, badge }) {
    return (
        <button className="relative grid h-10 w-10 place-items-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-slate-200" aria-label={label}>
            {children}
            {badge ? (
                <span className="absolute -right-0.5 -top-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-slate-900 px-1 text-[10px] font-bold text-white">
                    {badge}
                </span>
            ) : null}
        </button>
    );
}

function ProductCard({ img, name, price, rating }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="card h-100 shadow-sm">
      <div className="position-relative">
        <img
          src={img}
          alt={name}
          className="card-img-top"
          style={{ height: "250px", objectFit: "cover" }}
        />

        <button
          className="btn btn-light position-absolute top-0 end-0 m-2"
          onClick={() => setLiked(!liked)}
        >
          {liked ? "♥" : "♡"}
        </button>
      </div>

      <div className="card-body">
        <small className="text-muted">
          ★ {rating} · 128 reviews
        </small>

        <h5 className="card-title mt-2">{name}</h5>

        <div className="d-flex justify-content-between align-items-center">
          <strong>${price}</strong>

          <button className="btn btn-dark btn-sm">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}