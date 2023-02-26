import { Box, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { headerStyle } from "./headerStyle";
import { BsSearch } from "react-icons/bs";
import compare from "../../Assets/Images/compare.svg";
import wishlist from "../../Assets/Images/wishlist.svg";
import user from "../../Assets/Images/user.svg";
import cart from "../../Assets/Images/cart.svg";

const Header = () => {
  return (
    <>
      <Box sx={headerStyle.headerTopStrip} py={3}>
        <div className="container-xxl">
          <Grid container>
            <Grid item md={6} lg={6}>
              <p className="text-white mb-0">
                Free Shipping Over $100 & Free Returns
              </p>
            </Grid>
            <Grid item md={6} lg={6}>
              <p className="text-end text-white mb-0">
                Hotline:
                <a className="text-white" href="tel:+91 8264954234">
                  +91 8264954234
                </a>
              </p>
            </Grid>
          </Grid>
        </div>
      </Box>

      <Box sx={headerStyle.headerUpper} py={3}>
        <div className="container-xxl">
          <Grid container sx={{ alignItems: "center" }} spacing={3}>
            <Grid item md={2} lg={2}>
              <h2>
                <Link className="text-white">Flizzerr</Link>
              </h2>
            </Grid>

            <Grid item md={5} lg={5}>
            <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search Product Here..."
                  aria-label="Search Product Here..."
                  aria-describedby="basic-addon2"
                />
                <span style={headerStyle.inputGroupSearchText} className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </Grid>

            <Grid item md={5} lg={5}>
              <div className="d-flex align-items-center justify-content-between">
                <Grid
                  container
                  sx={{ alignItems: "center", gap: "10px", color: "white" }}
                >
                  <img
                    src={compare}
                    style={headerStyle.headerLinkImages}
                    alt="compareProducts"
                  />

                  <p className="mb-0">
                    Compare <br /> Products
                  </p>
                </Grid>

                <Grid
                  container
                  sx={{ alignItems: "center", gap: "10px", color: "white" }}
                >
                  <img
                    src={wishlist}
                    style={headerStyle.headerLinkImages}
                    alt="compareProducts"
                  />

                  <p className="mb-0">
                    Favourite <br /> Wishlist
                  </p>
                </Grid>

                <Grid
                  container
                  sx={{ alignItems: "center", gap: "10px", color: "white" }}
                >
                  <img
                    src={user}
                    style={headerStyle.headerLinkImages}
                    alt="compareProducts"
                  />

                  <p className="mb-0">
                    Log in <br /> My Account
                  </p>
                </Grid>

                <Grid
                  container
                  sx={{ alignItems: "center", gap: "10px", color: "white" }}
                >
                  <img
                    src={cart}
                    style={headerStyle.headerLinkImages}
                    alt="compareProducts"
                  />

                  <div className="d-flex flex-column gap-10">
                    <span className="badge bg-white text-dark">0</span>
                    <p className="mb-0">$ 500</p>
                  </div>
                </Grid>
              </div>
            </Grid>

          </Grid>
        </div>
      </Box>
      
    </>
  );
};

export default Header;
