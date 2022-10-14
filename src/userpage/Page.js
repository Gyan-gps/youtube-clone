import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { Stack } from "@mui/system";
import { auth, signInWithGoogle } from "../Firebase";
// import { useAllContext } from "../ContextProvider";


const theme = createTheme();

export default function Page({handle,page,account}) {
  const navigate = useNavigate();
  // const {user,setUser} = useAllContext();

  const handleSubmit =async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    if(page==="SIGN UP"){
      let res = await auth.createUserWithEmailAndPassword(data.get("email"),data.get("password"))
      console.log(res);
    }
    else if(page  === "SIGN IN"){
      await auth.signInWithEmailAndPassword(data.get("email"),data.get("password"));
      // console.log(res)
    }
    
    navigate("/");
  };

  const signinWithGoogle = async () =>{
  
    await signInWithGoogle();
    navigate("/");
  }

  return (
    <ThemeProvider theme={theme}>
      <div style={{ height: "90vh", overflowY: "auto" }}>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: "url(https://source.unsplash.com/random)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                {page==="SIGN UP" ? "Sign up":'Sign in'}
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                {/* <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                /> */}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  
                >
                  {page}
                </Button>
                <Grid container>
                  {/* <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid> */}
                  <Grid >
                    <div
                    style={{color:"green",cursor:'pointer'}}
                     onClick={()=>navigate(`/${page==="SIGN UP" ? "signin":'signup'}`)} variant="body2">
                      {account}
                    </div>
                  </Grid>
                </Grid>
                <Button
                //   type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 ,
                    backgroundColor:"white",
                    color:"#2f80ed",
                    border:"2px solid #2f80ed",
                    borderRadius:"20px",
                    "&:hover":{
                      background:"none"
                    }
                  }}
                  
                >
                  <Stack
                    sx={{
                      flexDirection: "row",
                    }}
                  >
                    <img
                      alt="google"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKtSURBVHgBtVZNaBNBFP62Wq2klA2ItmAkJoIgGlPqxVAlrQgKWunB4sWf0kNPthERtCDJxd7E3Lw1xYM/RVBPBammopKgaKptJaBNGhR/QiGJyYqYwDiT7G52ku4mUfxgsjtv5n3fe292XxYwACFEpMNLR5COOCkjJdtG6bCiUTAnmaBeBOoWkqNKkcbBfDy1yL267h8ihEwHCHl2v3SvD69R5DyyNKgJHyFH6FHsBz9O0CpePUvI1/hqImomglJzeonQIaqKc7PAWD+QSxtmjXbqejkAdLq1VubUKQjCcpNs8HHkrx4AIz21yRV0WCstjCsAJXouOZYyS19bjnNuQt4ESyVjYPfjZ0r7Vi+RApEJeDhTaIiQ00KZfMKr756t+bD5KBMJ0kTcanIvdwC/EsCTArD+VKm+f4/ZtfTHqU6ltyVyhl665Bis8vBMfYYRLhzaBIt5nTK1MoHy4SrkCsQDVQRTr1MwgstmgmVvWaCJWy1k+N2FOp8iDdo2rOHmLINlplSctTq4RSn3HibRxdkGuszc/FPqN0IxqSzQwgmkeQHTHiopQsrn4M85IC1MY7ybF/APbOHm7ExCKAlYzM1w2U3a5TlWoqdaS7LjIkYy3QjnN2N+ZQG3o3ehh2sz37kz2WdrrdzyUCi+DIC6S8pLGHo0XLwqOLi1l44e7N64q2iPZeJF4fBiC6KxPjX6e8M27RPEsE3pRdy7wCIfe34F9SD7w4rEx37cOOnE4Z1t2qVJ2osGdZvd/LcX8L+7ieTPpKGAqdmES10+ONu3a81qsxMUi9xir2t3MfJb0Ts0o8UqIUbcZz+K4/ZjxfsKnKfk/qpoWO/QaypLKxES+hImM4nHZCkdM+w/MILc/P7PX6ZGhLXwyQbIg+Qfvi5GZQJtVnHZxkoqGnH8ATnOR0pN+VZnAAAAAElFTkSuQmCC"
                    style={{marginRight:"5px"}}
                    />
                    <Box onClick={signinWithGoogle}>{"Continue with Google"}</Box>
                  </Stack>
                </Button>

              </Box>
            </Box>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}
