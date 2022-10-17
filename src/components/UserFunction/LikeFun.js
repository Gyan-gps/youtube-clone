import { ThumbUp } from "@mui/icons-material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAllContext } from "../../ContextProvider";
import { firestore } from "../../Firebase";

const LikeFun = ({ video }) => {
  const { userID, likeVideos, setLikeVideos } = useAllContext();
  const navigate = useNavigate();
  const handleClick = async () => {
    if (userID) {
      setLikeVideos([video,...likeVideos]);
      await firestore
        .collection(`${userID}-like`)
        .doc(`${video.id}`)
        .set(video);
        alert("Video Added to LikeFolder");
    } else {
      navigate("/signin");
    }
  };
  return <ThumbUp onClick={handleClick} />;
};

export default LikeFun;
