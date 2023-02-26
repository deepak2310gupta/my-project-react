import React from "react";
import { Box } from "@mui/material";
import { productCardStyle } from "./productCardStyle";
import watch from "../../Assets/Images/watch.jpg";
import ReactStars from "react-stars";
import prodCompare from "../../Assets/Images/prodcompare.svg";
import view from "../../Assets/Images/view.svg";

const ProductCard = () => {
  return (
    <Box sx={productCardStyle.productCard}>
      <Box sx={productCardStyle.productImage}>
        <img src={watch} alt="blog" className="img-fluid w-100" />
      </Box>
      <Box sx={productCardStyle.productDetails}>
        <h6 style={productCardStyle.productBrand}>Havels</h6>

        <h5 style={productCardStyle.productTitle}>
          A beautiful sunday morning renaissance
        </h5>

        <ReactStars
          count={5}
          size={24}
          value={4}
          edit={false}
          activeColor="#ffd700"
        />
        <p style={productCardStyle.productDesc}>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt...
        </p>
        <p style={productCardStyle.productPrice}>$100.00</p>
      </Box>

      {/* <div style={productCardStyle.productActionbar}>
        <div className="d-flex flex-column gap-15">
          <button className="border-0 bg-transparent">
            <img src={prodCompare} alt="compare" />
          </button>
          <button className="border-0 bg-transparent">
            <img src={view} alt="view" />
          </button>
          <button className="border-0 bg-transparent">
            <img src={addcart} alt="addcart" />
          </button>
        </div>
      </div> */}
      
    </Box>
  );
};

export default ProductCard;
