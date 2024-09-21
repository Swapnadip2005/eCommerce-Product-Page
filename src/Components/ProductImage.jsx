import React, { useState } from "react";
import "./ProductImage.css";
import p1_img1 from "../assets/Product Image/product1_image1.png";
import p1_img2 from "../assets/Product Image/product1_image2.png";
import p1_img3 from "../assets/Product Image/product1_image3.png";
import p1_img4 from "../assets/Product Image/product1_image4.png";
import p1_img5 from "../assets/Product Image/product1_image5.png";
import p1_img6 from "../assets/Product Image/product1_image6.png";
import p1_img7 from "../assets/Product Image/product1_image7.jfif";
import p1_img8 from "../assets/Product Image/product1_image8.jfif";
import p1_img9 from "../assets/Product Image/product1_image9.jfif";
import p1_img10 from "../assets/Product Image/product1_image10.png";
import p2_img1 from "../assets/Product Image/product2_image1.jfif";
import p2_img2 from "../assets/Product Image/product2_image2.png";
import p2_img3 from "../assets/Product Image/product2_image3.jfif";
import p2_img4 from "../assets/Product Image/product2_image4.png";
import p2_img5 from "../assets/Product Image/product2_image5.jfif";
import p2_img6 from "../assets/Product Image/product2_image6.png";
import p2_img7 from "../assets/Product Image/product2_image7.jfif";
import p2_img8 from "../assets/Product Image/product2_image8.jfif";
import p2_img9 from "../assets/Product Image/product2_image9.jfif";
import p2_img10 from "../assets/Product Image/product2_image10.png";
import arrow from "../assets/arrow.png";

const ProductImage = () => {
  const [productImage, setProductImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState("color1");
  const [selected, setSelected] = useState(null);

  const toggle = (index) => {
    if (selected == index) {
      return setSelected(null);
    }
    setSelected(index);
  };

  const prev = () => {
    setProductImage((productImage) =>
      productImage === 0 ? selectedProductImages.length - 1 : productImage - 1
    );
  };

  const next = () => {
    setProductImage(
      productImage === selectedProductImages.length - 1 ? 0 : productImage + 1
    );
  };

  const product_images1 = [
    p1_img1,
    p1_img2,
    p1_img3,
    p1_img4,
    p1_img5,
    p1_img6,
    p1_img7,
    p1_img8,
    p1_img9,
    p1_img10,
  ];

  const product_images2 = [
    p2_img1,
    p2_img2,
    p2_img3,
    p2_img4,
    p2_img5,
    p2_img6,
    p2_img7,
    p2_img8,
    p2_img9,
    p2_img10,
  ];

  const shoe_size = [
    "UK 6 (EU 40)",
    "UK 6.5",
    "UK 7",
    "UK 7.5",
    "UK 8",
    "UK 8.5",
    "UK 9",
    "UK 9.5",
    "UK 10",
    "UK 10.5",
    "UK 11",
    "UK 11.5",
    "UK 12",
  ];

  const data = [
    {
      heading: "Delivery & Returns",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quia cupiditate, provident ut dolorem autem impedit earum maxime ducimus corrupti obcaecati iste illo delectus facilis ab quam libero nostrum blanditiis",
    },
    {
      heading: "How This Was Made",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quia cupiditate, provident ut dolorem autem impedit earum maxime ducimus corrupti obcaecati iste illo delectus facilis ab quam libero nostrum blanditiis",
    },
    {
      heading: "Product Information",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quia cupiditate, provident ut dolorem autem impedit earum maxime ducimus corrupti obcaecati iste illo delectus facilis ab quam libero nostrum blanditiis",
    },
  ];

  const selectedProductImages =
    selectedColor === "color1" ? product_images1 : product_images2;

  return (
    <div className="product_container">
      <div className="product_heading top">
        <p className="sub_heading">Sustainable Materials</p>
        <h1 className="heading">Nike Air Force 1 '07 LV8</h1>
        <p className="category">Men's Shoes</p>
        <p className="price">$250</p>
      </div>
      <div className="product_image_container">
        <div className="product">
          <div className="product_image">
            {selectedProductImages.map((image, index) => {
              return (
                <img
                  key={index}
                  className={productImage === index ? "selected-image" : ""}
                  src={image}
                  alt=""
                  onClick={() => setProductImage(index)}
                  onMouseEnter={() => setProductImage(index)}
                />
              );
            })}
          </div>
          <div className="main_product_image">
            <img src={selectedProductImages[productImage]} alt="" />
            <img
              className="right_arrow arrow"
              src={arrow}
              alt=""
              onClick={next}
            />
            <img
              className="left_arrow arrow"
              src={arrow}
              alt=""
              onClick={prev}
            />
          </div>
        </div>
      </div>
      <div className="product_description">
        <div className="product_heading bottom">
          <p className="sub_heading">Sustainable Materials</p>
          <h1 className="heading">Nike Air Force 1 '07 LV8</h1>
          <p className="category">Men's Shoes</p>
          <p className="price">$250</p>
        </div>
        <div className="product_colour">
          <img
            className={
              selectedColor === "color1" ? "selected-color selected_image" : ""
            }
            src={p1_img1}
            alt="Color 1"
            onClick={() => {
              setSelectedColor("color1");
              setProductImage(0);
            }}
          />
          <img
            className={
              selectedColor === "color2" ? "selected-color selected_image" : ""
            }
            src={p2_img1}
            alt="Color 2"
            onClick={() => {
              setSelectedColor("color2");
              setProductImage(0);
            }}
          />
        </div>
        <div className="product_size">
          <p className="select_size">Select Size</p>
          <p className="size_guide">Size Guide</p>
        </div>
        <div className="shoe_size_container">
          <div className="shoe_sizes">
            {shoe_size.map((sizes) => {
              return <p>{sizes}</p>;
            })}
          </div>
        </div>
        <div className="buttons">
          <button className="add_to_bag">Add to Bag</button>
          <button className="favourite">Favourite</button>
        </div>
        <div className="message">
          <p>
            This product is made with atleast 20% recycled content by weight
          </p>
        </div>
        <div className="about">
          <p style={{ marginBottom: "30px" }}>
            These AF-1s are going back to school and they just won "Best
            Dressed". Layers of canvas and synthetic leather create a vintage,
            varsity-inspired aesthetic. Don't forget to leave your mark: the
            sockliner graphics are inspired by school yearbooks—and we already
            signed it.
          </p>
          <li>Colour Shown: Coconut Milk/Bicoastal/Black/Vintage Green</li>
          <li>Style: FQ8713-100</li>
          <li>Country/Region of Origin: Vietnam</li>
        </div>
        <div className="product_details">
          <p className="view_product_details">View Product Details</p>
          <div className="wrapper">
            <div className="accordion">
              {data.map((item, index) => {
                return (
                  <div className="item">
                    <div className="title" onClick={() => toggle(index)}>
                      <h2>{item.heading}</h2>
                      <span>{selected === index ? "-" : "^"}</span>
                    </div>
                    <div
                      className={
                        selected === index ? "content show" : "content"
                      }
                    >
                      {item.details}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductImage;
