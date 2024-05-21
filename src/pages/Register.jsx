import React from "react";
import {
  Avatar,
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
  Box,
  Link,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { createTheme, ThemeProvider } from "@mui/material/styles";


const theme = createTheme();

const Register = () => {
  return (
    <ThemeProvider theme={theme} >
      <Container
        component="main"
        maxWidth="md"
        sx={{ 
        backgroundColor: "#ffffff",
        borderRadius: 4,
        p: 4,
        boxShadow: 4,
        backdropFilter: "blur(20px)",
        mt: 9,
      
         }}
      >
        <CssBaseline />
        <Grid container>
          <Grid
            item
            xs={12}
            sm={6}
            // sx={{
            //   backgroundColor: "#ffffff",
            //   borderRadius: 2,
            //   p: 4,
            //   boxShadow: 3,
            //   backdropFilter: "blur(10px)",
            // }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar> */}
              <Typography component="h1" variant="h5">
                Sign Up
              </Typography>
              <Box component="form" noValidate sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="fullName"
                      label="Full Name"
                      name="fullName"
                      autoComplete="name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="confirmPassword"
                      label="Confirm Password"
                      type="password"
                      id="confirmPassword"
                      autoComplete="new-password"
                    />
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            sx={{ p: 3 }}
            gap={1}
          

          >
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 5, mb: 3, bgcolor: "black", color: "white" }}
            >
              Sign Up
            </Button>
            <Grid
              container
              justifyContent="center"
              display="flex"
              flexDirection="colomn"
            >
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Log in
                </Link>
              </Grid>
            </Grid>

            <Typography variant="body2" align="center" sx={{ mt: 2 }}>
              Or
            </Typography>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<GoogleIcon />}
              sx={{ mt: 2, mb: 1 }}
            >
              Sign up with Google
            </Button>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<FacebookIcon />}
              sx={{ mt: 1, mb: 2 }}
            >
              Sign up with Facebook
            </Button>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Register;
