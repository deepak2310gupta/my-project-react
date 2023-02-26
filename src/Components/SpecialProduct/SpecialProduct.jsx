import React from "react";
import { Box } from "@mui/material";
import { specialProductStyle } from "./specialProductStyle";
import watch from "../../Assets/Images/watch.jpg";
import ReactStars from "react-stars";
import { productCardStyle } from "../ProductCard.jsx/productCardStyle";

const SpecialProduct = () => {
  return (
        <Box sx={specialProductStyle.specialProductCard} mb={1}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <img src={watch} alt="watch" className="img-fluid" />
            </Box>

            <Box sx={specialProductStyle.specialProductContent}>
              <h5 style={productCardStyle.productBrand}>Havels</h5>
              <h6 style={productCardStyle.productTitle}>
                Samsung Galaxy Note10+ Mobile Phone; Sim...
              </h6>
              <ReactStars
                count={5}
                size={24}
                value={4}
                edit={false}
                activeColor="#ffd700"
              />
              <p style={productCardStyle.productPrice}>
                <span className="red-p">$100</span> &nbsp; <strike>$200</strike>
              </p>

              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <p className="mb-0">
                  <b>5 </b>days
                </p>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <span className="badge rounded-circle p-3 bg-danger">1</span>:
                  <span className="badge rounded-circle p-3 bg-danger">1</span>:
                  <span className="badge rounded-circle p-3 bg-danger">1</span>
                </Box>
              </Box>

              <div className="prod-count my-3">
                <p>Products: 5</p>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "25%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </Box>
          </Box>
        </Box>
  );
};

export default SpecialProduct;
