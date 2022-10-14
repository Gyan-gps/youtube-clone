import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { firestore } from "../Firebase";
import { useAllContext } from "../ContextProvider";
export const demoThumbnailUrl = "https://i.ibb.co/G2L2Gwp/API-Course.png";
export const demoChannelUrl = "/channel/UCmXmlB4-HJytD7wek0Uo97A";
export const demoVideoUrl = "/video/GDa8kZLNhJ4";

const VideoCard = ({ video, removeCard, category }) => {
  // console.log(removeCard);
  const {
    userID,
    likeVideos,
    setLikeVideos,
    watchLaterVideos,
    setWatchLaterVideos,
  } = useAllContext();

  const removeVideoCard = async () => {
    if (category === "like") {
      setLikeVideos(likeVideos.filter((e) => e.id !== removeCard));
    } else if (category === "watchlater") {
      setWatchLaterVideos(watchLaterVideos.filter((e) => e.id !== removeCard));
    }
    await firestore
      .collection(`${userID}-${category}`)
      .doc(`${removeCard}`)
      .delete();
  };

  return (
    <Card
      sx={{
        width: { xs: "320px", sm: "250px" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Link
        to={
          video.id.videoId ? `/video/${video.id.videoId}` : `/video/${video.id}`
        }
      >
        <CardMedia
          image={
            video.snippet?.thumbnails?.medium?.url ||
            "https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_youtube-512.png"
          }
          alt={video.snippet?.title}
          sx={{ height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1E1E1E", height: "96px" }}>
        <Link
          to={
            video.id.videoId
              ? `/video/${video.id.videoId}`
              : `/video/${video.id}`
          }
        >
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {video.snippet?.title.slice(0, 40) || "This is Gyan Channel"}
          </Typography>
        </Link>
        <Link
          to={
            video.snippet?.channelId
              ? `/channel/${video.snippet?.channelId}`
              : `/video/${video.id}`
          }
        >
          <Typography variant="subtitle2" color="gray">
            {video.snippet?.channelTitle || "This is Gyan Channel"}
            <CheckCircleIcon
              sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
            />
          </Typography>
        </Link>
      </CardContent>
      {removeCard && (
        <button className="removebtn" onClick={removeVideoCard}>
          Remove
        </button>
      )}
    </Card>
  );
};

export default VideoCard;
