import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Feed from './components/Feed'
import VideosDetails from './components/VideosDetails'
import ChannelDetail from './components/ChannelDetail'
import SearchFeed from "./components/SearchFeed";
import { useAllContext } from "./ContextProvider";
import Signup from './userpage/Signup'
import Signin from "./userpage/Signin";
import Like from "./user/Like";
import WatchLater from "./user/WatchLater";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  const {theme,user} = useAllContext();
  return (
    <Box 
    sx={{ backgroundColor: theme.bgcolor, color: theme.color, transition: "backgroundColor 0.5s ease 2s" }}
    >
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Feed/>}/>
        <Route path='/video/:id'  element={<VideosDetails/>}/>
        <Route path='/channel/:id'  element={<ChannelDetail/>}/>
        <Route path='/search/:searchTerm'  element={<SearchFeed/>}/>
        <Route path='/signup' exact element={<Signup/>}/>
        <Route path='/signin' exact element={<Signin/>}/>
        <Route element={<ProtectedRoute user={user} />}>
        <Route path='/like' exact element={<Like/>}/>
        <Route path='/watchlater' exact element={<WatchLater/>}/>
        </Route>
      </Routes>
    </Box>
  );
}

export default App;
