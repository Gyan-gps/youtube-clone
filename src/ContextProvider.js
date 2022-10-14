import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, firestore } from "./Firebase";

const allContext = createContext();

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [userID, setUserID] = useState("");
  const [likeVideos, setLikeVideos] = useState([]);
  const [watchLaterVideos, setWatchLaterVideos] = useState([]);

  const [theme, setTheme] = useState({
    color: "black",
    bgcolor: "white",
  });
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      setUser(user);
      if (user) {
        setUserID(user.uid);
        const getData = async () => {
          let datal = await firestore.collection(`${user.uid}-like`).get();
          datal.docs.map((doc) => (likeVideos.push(doc.data())));

          let dataw = await firestore.collection(`${user.uid}-watchlater`).get();
          dataw.docs.map((doc) => (watchLaterVideos.push(doc.data())));
        };
        getData();
      }
    });

    return () => {
      unsub();
    };
  }, []);
  const values = {
    user,
    setUser,
    theme,
    setTheme,
    authLoading,
    setAuthLoading,
    userID,
    setUserID,
    likeVideos,
    setLikeVideos,
    watchLaterVideos,
    setWatchLaterVideos,
  };

  return <allContext.Provider value={values}>{children}</allContext.Provider>;
};

export const useAllContext = () => useContext(allContext);
