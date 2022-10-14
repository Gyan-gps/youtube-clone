import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../fetchFromAPI";
import Videos from "./Videos";
import Loader from "./Loader";
import { useAllContext } from "../ContextProvider";

const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();
  const { theme } = useAllContext();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  if (!videos?.length) return <Loader />;

  return (
    <>
      <Box p={2} sx={{overflowY:'auto',height:'90vh',flex:2}}>
        <Typography
          variant="h4"
          fontWeight={900}
          sx={{ color: theme.color }}
          mb={3}
          ml={{ sm: "100px" }}
        >
          Search Results for{" "}
          <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
        </Typography>
        {/* <Box display="flex" sx={{ height: "92vh" }}>
          <Box sx={{ mr: { sm: "100px" } }} /> */}
          {<Videos videos={videos} />}
        {/* </Box> */}
      </Box>
    </>
  );
};

export default SearchFeed;
