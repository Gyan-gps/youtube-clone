// import { LinkedCamera } from "@mui/icons-material";
import { Stack } from "@mui/material";
import React, {  } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAllContext } from "../ContextProvider";
import { auth } from "../Firebase";
import DarkMode from "./DarkMode";
import Search from "./Search";

const Navbar = () => {
  const { user } = useAllContext();
  const navigate = useNavigate();
  // const [selected,setSelected] = useState("User");

  const handleLogout = async (e) => {
    // console.log("hi",e);
    if (user && e === "LogOut") {
      await auth.signOut();
      navigate(`/`);
    } else if (e === "user") navigate(`/`);
    else navigate(`/${e}`);
  };

  return (
    <Stack
      className="navbar"
      direction="row"
      alignItems="center"
      p={2}
      sx={{ position: "sticky", top: 0, justifyContent: "space-between" }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img
          src="https://www.iconpacks.net/icons/2/free-icon-youtube-logo-2431.png"
          alt="logo"
          height={45}
        />
      </Link>
      <DarkMode />
      <Stack direction="row" sx={{gap:{xs:1,sm:8}}}>
        <Search sx={{}}/>
        <select onChange={(e) => handleLogout(e.target.value)}
          style={{
            border: "none",
            width:"55px",
            backgroundColor: "darkcyan",
            padding: "1px",
            fontSize: "14px",
            borderRadius: "10px",
            marginRight:"8px"
          }}
          value="User"
        >
          <option value="user">User</option>
            {user ? (
            <option value="LogOut">LogOut</option>
          ) : (
            <option value="signin">SignIn</option>
          )}
          <option value="like">Like</option>
          <option value="watchlater">WLater</option>
        </select>
      </Stack>
    </Stack>
  );
};

export default Navbar;
