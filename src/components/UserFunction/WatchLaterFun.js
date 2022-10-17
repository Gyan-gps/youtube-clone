import { TimelapseRounded } from "@mui/icons-material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAllContext } from "../../ContextProvider";
import { firestore } from "../../Firebase";

const WatchLaterFun = ({ video }) => {
  const { userID, watchLaterVideos, setWatchLaterVideos} = useAllContext();
  const navigate = useNavigate();
  const handleClick = async () => {
    if(userID){
      setWatchLaterVideos([ video,...watchLaterVideos]);
    await firestore
      .collection(`${userID}-watchlater`)
      .doc(`${video.id}`)
      .set(video);
    }
    else {
      navigate("/signin");
    }
  };
  // console.log(video)
  return <TimelapseRounded onClick={handleClick} />;
};

export default WatchLaterFun;
