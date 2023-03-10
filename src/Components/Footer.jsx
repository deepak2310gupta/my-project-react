import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";
import { Box, Divider, Grid } from "@mui/material";
import newsletter from "../Assets/Images/newsletter.png";
import { CommonStyles } from "./CommonStyles";

const Footer = () => {
  return (
    <>
      <Box sx={CommonStyles.footer} py={4}>
        <div className="container-xxl">
          <Grid container sx={{ alignItems: "center" }}>
            <Grid item md={5} lg={5}>
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src={newsletter} alt="newsletter" />
                <h2 style={CommonStyles.signUpFooterHeader}>
                  Sign Up for Newsletter
                </h2>
              </div>
            </Grid>

            <Grid item md={7} lg={7}>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span
                  className="input-group-text p-2"
                  id="basic-addon2"
                >
                  Subscribe
                </span>
              </div>
            </Grid>
          </Grid>
        </div>
      </Box>

      <Divider sx={CommonStyles.footerDivider} />

      <Box sx={CommonStyles.footer} py={4}>
        <div className="container-xxl">
          <Grid container>
            <Grid item md={4} lg={4}>
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className="text-white fs-6">
                  Hno : 5883 Khasapura, <br /> Rewari, Haryana <br />
                  PinCode: 123401
                </address>
                <a
                  href="tel:+91 829506XXYY"
                  className="mt-3 d-block mb-1 text-white"
                >
                  +91 829506XXYY
                </a>
                <a
                  href="mailto:guptadeepak2310@gmail.com"
                  className="mt-2 d-block mb-0 text-white"
                >
                  guptadeepak2310@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a className="text-white" href="#">
                    <BsLinkedin className="fs-4" />
                  </a>
                  <a className="text-white" href="#">
                    <BsInstagram className="fs-4" />
                  </a>
                  <a className="text-white" href="#">
                    <BsGithub className="fs-4" />
                  </a>
                  <a className="text-white" href="#">
                    <BsYoutube className="fs-4" />
                  </a>
                </div>
              </div>
            </Grid>

            <Grid item md={3} lg={3}>
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-link d-flex flex-column">
                <Link to="/privacy-policy" className="text-white py-2 mb-1">
                  Privacy Policy
                </Link>
                <Link to="/refund-policy" className="text-white py-2 mb-1">
                  Refund Policy
                </Link>
                <Link to="/shipping-policy" className="text-white py-2 mb-1">
                  Shipping Policy
                </Link>
                <Link to="/term-conditions" className="text-white py-2 mb-1">
                  Terms & Conditions
                </Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </Grid>

            <Grid item md={3} lg={3}>
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
              </div>
            </Grid>

            <Grid item md={2} lg={2}>
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </Grid>
          </Grid>
        </div>
      </Box>

      <Divider sx={CommonStyles.footerDivider} />

      <Box sx={CommonStyles.footer} py={4}>
        <div className="container-xxl">
          <Grid container>
            <Grid item md={12} lg={12}>
              <p style={CommonStyles.poweredBy}>
                &copy; {new Date().getFullYear()}; Powered by Deepak Gupta
              </p>
            </Grid>
          </Grid>
        </div>
      </Box>
    </>
  );
};

export default Footer;
