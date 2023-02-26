import React from "react";
import { Grid } from "@mui/material";
import BlogCard from "../Components/BlogCard/BlogCard";
import Container from "../Components/Container";
import ProductCard from "../Components/ProductCard.jsx/ProductCard";
import { homeStyle } from "./homeStyle";

const Home = () => {
  return (
    <>
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
    </>
  );
};

export default Home;
