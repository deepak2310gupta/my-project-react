import React from "react";
import { Box, Grid } from "@mui/material";
import BlogCard from "../Components/BlogCard/BlogCard";
import Container from "../Components/Container";
import ProductCard from "../Components/ProductCard.jsx/ProductCard";
import { homeStyle } from "./homeStyle";
import SpecialProduct from "../Components/SpecialProduct/SpecialProduct";
import mainBanner from "../Assets/Images/main-banner-1.jpg";
import catBanner1 from "../Assets/Images/catbanner-01.jpg";
import catBanner2 from "../Assets/Images/catbanner-02.jpg";
import catBanner3 from "../Assets/Images/catbanner-03.jpg";
import catBanner4 from "../Assets/Images/catbanner-04.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <Grid container spacing={2}>
          <Grid item md={6} lg={6}>
            <Box sx={homeStyle.leftImageWrapper}>
              <img
                src={mainBanner}
                className="img-fluid rounded-3"
                alt="main banner"
              />
              <Box sx={homeStyle.leftImageTextWrapper}>
                <h4 style={homeStyle.mainBannerLeftHeader}>
                  SUPERCHARGED FOR PROS.
                </h4>
                <h5 style={homeStyle.mainBannerLeftSubHeader}>
                  iPad S13+ Pro.
                </h5>
                <p style={homeStyle.mainBannerLeftSubDesc}>
                  From $999.00 or $41.62/mo.
                </p>
                <Link className="button">BUY NOW</Link>
              </Box>
            </Box>
          </Grid>

          <Grid item md={6} lg={6}>
            <Grid container spacing={2} mb={1.5}>
              <Grid item md={6} lg={6}>
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <Box sx={homeStyle.leftImageWrapper}>
                  <img
                    src={catBanner1}
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <Box sx={homeStyle.rightImageTextWrapper}>
                    <h4 style={homeStyle.smallBannerRightHeader}>Best Sale</h4>
                    <h5 style={homeStyle.smallBannerRightSubHeader}>
                      Laptops Max.
                    </h5>
                    <p style={homeStyle.smallBannerContentDesc}>
                      From $999.00 <br /> or $41.62/mo.
                    </p>
                  </Box>
                </Box>
                </div>
              </Grid>

              <Grid item md={6} lg={6}>
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <Box sx={homeStyle.leftImageWrapper}>
                  <img
                    src={catBanner2}
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <Box sx={homeStyle.rightImageTextWrapper}>
                    <h4 style={homeStyle.smallBannerRightHeader}>
                      New Arrival
                    </h4>
                    <h5 style={homeStyle.smallBannerRightSubHeader}>
                      Buy IPad Air.
                    </h5>
                    <p style={homeStyle.smallBannerContentDesc}>
                      From $999.00 <br /> or $41.62/mo.
                    </p>
                  </Box>
                </Box>
                </div>
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item md={6} lg={6}>
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <Box sx={homeStyle.leftImageWrapper}>
                  <img
                    src={catBanner3}
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <Box sx={homeStyle.rightImageTextWrapper}>
                    <h4 style={homeStyle.smallBannerRightHeader}>Best Sake</h4>
                    <h5 style={homeStyle.smallBannerRightSubHeader}>
                      SmartWatch 7.
                    </h5>
                    <p style={homeStyle.smallBannerContentDesc}>
                      From $999.00 <br /> or $41.62/mo.
                    </p>
                  </Box>
                </Box>
                </div>
              </Grid>

              <Grid item md={6} lg={6}>
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <Box sx={homeStyle.leftImageWrapper}>
                  <img
                    src={catBanner4}
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <Box sx={homeStyle.rightImageTextWrapper}>
                    <h4 style={homeStyle.smallBannerRightHeader}>
                      Free Engraving
                    </h4>
                    <h5 style={homeStyle.smallBannerRightSubHeader}>
                      AirPods Max.
                    </h5>
                    <p style={homeStyle.smallBannerContentDesc}>
                      From $999.00 <br /> or $41.62/mo.
                    </p>
                  </Box>
                </Box>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <Grid container spacing={2}>
          <Grid item md={12} lg={12}>
            <h3 style={homeStyle.sectionHeading}>Our Popular Products</h3>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item md={3} lg={3}>
            <ProductCard />
          </Grid>
          <Grid item md={3} lg={3}>
            <ProductCard />
          </Grid>
          <Grid item md={3} lg={3}>
            <ProductCard />
          </Grid>
          <Grid item md={3} lg={3}>
            <ProductCard />
          </Grid>
        </Grid>
      </Container>

      <Container class1="special-wrapper py-5 home-wrapper-2">
        <Grid container>
          <Grid item md={12} lg={12}>
            <h3 style={homeStyle.sectionHeading}>Special Products</h3>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item md={6} lg={6}>
            <SpecialProduct />
          </Grid>
          <Grid item md={6} lg={6}>
            <SpecialProduct />
          </Grid>

          <Grid item md={6} lg={6}>
            <SpecialProduct />
          </Grid>
          <Grid item md={6} lg={6}>
            <SpecialProduct />
          </Grid>
        </Grid>
      </Container>

      <Container class1="py-5 home-wrapper-2">
        <Grid container>
          <Grid item md={12} lg={12}>
            <h3 style={homeStyle.sectionHeading}>Featured Collections</h3>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item md={3} lg={3}>
            <ProductCard />
          </Grid>
          <Grid item md={3} lg={3}>
            <ProductCard />
          </Grid>
          <Grid item md={3} lg={3}>
            <ProductCard />
          </Grid>
          <Grid item md={3} lg={3}>
            <ProductCard />
          </Grid>
        </Grid>
      </Container>

      <Container class1="py-5 home-wrapper-2">
        <Grid container>
          <Grid item md={12} lg={12}>
            <h3 style={homeStyle.sectionHeading}>Our Latest Blogs</h3>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item md={3} lg={3}>
            <BlogCard />
          </Grid>
          <Grid item md={3} lg={3}>
            <BlogCard />
          </Grid>
          <Grid item md={3} lg={3}>
            <BlogCard />
          </Grid>
          <Grid item md={3} lg={3}>
            <BlogCard />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
