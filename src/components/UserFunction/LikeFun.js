import { ThumbUp } from '@mui/icons-material'
import React from 'react'
import { useAllContext } from '../../ContextProvider'
import { firestore } from '../../Firebase'

const LikeFun = ({video}) => {
    const {userID,likeVideos,setLikeVideos} = useAllContext();
    const handleClick = async ()=>{
       setLikeVideos([...likeVideos,video])
       await  firestore.collection(`${userID}-like`).doc(`${video.id}`).set(video);
       
    }
  return (
    <ThumbUp onClick={handleClick}/>
  )
}

export default LikeFun
