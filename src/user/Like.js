import { Box, Stack, Typography } from '@mui/material';
import React, {  } from 'react'
import Loader from '../components/Loader';
import VideoCard from '../components/VideoCard';
import { useAllContext } from '../ContextProvider';
// import { firestore } from '../Firebase';

const Like = () => {

    const {theme,likeVideos} = useAllContext();
    if(likeVideos.length===0)return (<Loader/>);
    // console.log(likeVideos)
  return (
    <Box p={2} sx={{overflowY:'auto',height:'80vh',flex:2}}>
      <Typography
        variant="h4"
        fontWeight={900}
        sx={{ color: theme.color }}
        mb={3}
        ml={{ sm: "100px" }}
      >
        <span style={{ color: "#FC1503" }}>Like</span> videos
      </Typography>
      <Box display="flex">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="start"
          alignItems="start"
          gap={2}
        >
          {likeVideos.map((item, idx) => (
            <Box key={idx}>{<VideoCard video={item} removeCard={item.id} category="like"/>}</Box>
          ))}
        </Stack>
      </Box>
    </Box>
  )
}

export default Like
