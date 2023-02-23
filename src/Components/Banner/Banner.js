import React, { useEffect, useState } from "react";
import "./Banner.css";
import Banners from "./BannerData";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";

import product1 from "../../images/laptop1.jpg"
import product2 from "../../images/laptop2.jpg";
import product3 from "../../images/laptop3.jpg";


import Products from "../Products/Products"

function Banner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < 0) {
      setIndex(Banners.length - 1);
    }
    if (index > Banners.length - 1) {
      setIndex(0);
    }
  }, [index]);

  useEffect(() => {
    const BannerInterval = setInterval(() => {
      setIndex(index + 1);
      return clearInterval(BannerInterval);
    }, 3000);
  }, [index]);

  return (
    <div className="banner-and-products">
      <div className="banners_container">
        <div className="banners">
          {Banners.map((banner, bannerIndex) => {
            let postion = "next";
            if (bannerIndex === index) {
              postion = "active";
            }
            if (
              bannerIndex === index - 1 ||
              (index === 0 && bannerIndex === Banners.length - 1)
            ) {
              postion = "prev";
            }
            return (
              <img
                key={bannerIndex}
                className={`banner ${postion}`}
                src={banner.img}
                alt=""
              />
            );
          })}
        </div>
        <ChevronLeftOutlinedIcon
          sx={{ fontSize: "80px", fontWeight: "200" }}
          className="left"
          onClick={() => setIndex(index - 1)}
        />
        <ChevronRightOutlinedIcon
          sx={{ fontSize: "80px", fontWeight: "200" }}
          className="right"
          onClick={() => setIndex(index + 1)}
        />
      </div>

      

      <div className="banner-and-product-flex">
        <Products
          id="12423"
          title="HP 14 FHD Business Laptop Computer [Windows 11 Pro] , 6-core AMD
            Ryzen 5 5500U (Up to 4.0 Ghz), 16GB RAM, 512GB PCIe SSD, Thin &
            Portable, Long Battery Life, Wi-Fi 6, Bluetooth 5.2, HDMI, USB,
            w/Hub"
          image={product1}
          price="$579.00"
          rating={5}
        />
        <Products
          id="2347823"
          title="Lenovo 2022 Newest Ideapad 3 Laptop, 15.6 HD Touchscreen, 11th Gen Intel Core i3-1115G4 Processor, 8GB DDR4 RAM, 256GB PCIe NVMe SSD, HDMI, Webcam, Wi-Fi 5, Bluetooth, Windows 11 Home, Almond"
          image={product2}
          price="$379.00"
          rating={3}
        />
        <Products
          id="12423"
          title="HP Victus 15.6 Gaming Laptop PC, NVIDIA GeForce RTX 3050 Ti, AMD Ryzen 7 5800H, Refined 1080p IPS Display, Compact Design, All-in-One Keyboard with Enlarged Touchpad, HD Webcam (15-fb0028nr, 2022)"
          image={product3}
          price="$849.00"
          rating={4}
        />
      </div>

      <div className="banner-and-product-flex">
        <Products
          id="56"
          title="Acer Aspire 5 A515-56-32DK Slim Laptop - 15.6 Full HD IPS Display - 11th Gen Intel i3-1115G4 Dual Core Processor - 4GB DDR4 - 128GB NVMe SSD - WiFi 6 - Amazon Alexa - Windows 11 Home in S mode."
          image={product1}
          price="$269.00"
          rating={5}
        />
        <Products
          id="9786"
          title="Acer Aspire 5 A515-56-32DK Slim Laptop - 15.6 Full HD IPS Display - 11th Gen Intel i3-1115G4 Dual Core Processor - 4GB DDR4 - 128GB NVMe SSD - WiFi 6 - Amazon Alexa - Windows 11 Home in S mode."
          image={product2}
          price="$349.00"
          rating={5}
        />
        <Products
          id="12423"
          title="HP 14 FHD Business Laptop Computer [Windows 11 Pro] , 6-core AMD
            Ryzen 5 5500U (Up to 4.0 Ghz), 16GB RAM, 512GB PCIe SSD, Thin &
            Portable, Long Battery Life, Wi-Fi 6, Bluetooth 5.2, HDMI, USB,
            w/Hub"
          image={product3}
          price="$579.00"
          rating={5}
        />
      </div>
    </div>
  );
}

export default Banner;
