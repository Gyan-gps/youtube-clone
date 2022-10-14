import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useAllContext } from "../ContextProvider";

export const demoProfilePicture =
  "http://dergipark.org.tr/assets/app/images/buddy_sample.png";

const ChannelCard = ({ channelDetail , marginTop}) => {
  const {theme} = useAllContext();
  // console.log(channelDetail);
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        width: { xs: '100%', sm: '358px', md: "208px", },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "326px",
        margin: "auto",
        marginTop,
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: theme.color,
          }}
        >
          <CardMedia
            image={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              "https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_youtube-512.png"
            }
            alt={channelDetail?.snippet?.title}
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
          />
          <Typography variant="h6">
            {channelDetail?.snippet?.title}{" "}
            <CheckCircleIcon
              sx={{ fontSize: "14px", color: "gray", ml: "5px" }}
            />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography
              sx={{ fontSize: "15px", fontWeight: 500, color: theme.color}}
            >
              {parseInt(
                channelDetail?.statistics?.subscriberCount
              ).toLocaleString("en-US")}{" "}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
