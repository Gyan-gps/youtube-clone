import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import {fetchFromAPI} from '../fetchFromAPI'
import Videos from "./Videos";
import { useAllContext } from "../ContextProvider";

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);
  const {theme} = useAllContext();

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
    }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" }, height:{xs:"85vh"} }}>
      <Box
        sx={{
          height: { xs: "auto", md: "85vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color:theme.color }}
        >
          Copyright © 2022 YouTube Media
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "#009688" }}>
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
    // <h1>feed</h1>
  );
};

export default Feed;
