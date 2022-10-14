import { TimelapseRounded } from "@mui/icons-material";
import React from "react";
import { useAllContext } from "../../ContextProvider";
import { firestore } from "../../Firebase";

const WatchLaterFun = ({ video }) => {
  const { userID, watchLaterVideos, setWatchLaterVideos} = useAllContext();
  const handleClick = async () => {
    setWatchLaterVideos([...watchLaterVideos, video]);
    await firestore
      .collection(`${userID}-watchlater`)
      .doc(`${video.id}`)
      .set(video);
  };
  // console.log(video)
  return <TimelapseRounded onClick={handleClick} />;
};

export default WatchLaterFun;
