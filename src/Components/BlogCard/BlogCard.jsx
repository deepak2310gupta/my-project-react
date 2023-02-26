import React from "react";
import { Box, Button } from "@mui/material";
import { blogCardStyle } from "./blogCardStyle";
import blog from "../../Assets/Images/blog-1.jpg";

const BlogCard = () => {
  return (
    <Box sx={blogCardStyle.blogCard}>
      <Box sx={blogCardStyle.cardImage}>
        <img src={blog} alt="blog" className="img-fluid w-100" />
      </Box>
      <Box sx={blogCardStyle.blogContent}>
        <p style={blogCardStyle.contentDate}>1 Dec,2022</p>

        <h5>A beautiful sunday morning renaissance</h5>

        <p style={blogCardStyle.contentDesc}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur
        </p>

        <Button sx={blogCardStyle.blogButton}>Read More</Button>
      </Box>
    </Box>
  );
};

export default BlogCard;
