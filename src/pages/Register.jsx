import React from "react";
import {

  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
  Box,
  Link,
} from "@mui/material";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import image from "../assets/back5.jpeg";
import { object, string } from "yup";

const theme = createTheme();

const Register = () => {

  const registerSchema = object({
    username: string().required("Please enter a username"),
    firstName: string().required("Please enter a first name"),
    lastName: string().required("Please enter a last name"),
    email: string()
    .email("Please, enter a valid email")
    .required("Email required"),
    password: string()
      .required("Please enter a password")
      .min(8, "Şifre en az 8 karakter olmalıdır")
      .max(16, "Şifre en fazla 16 karakter olmalıdır")
      .matches(/\d+/, "Şifre en az bir rakam içermelidir.")
      .matches(/[a-z]+/, "Şifre en az bir küçük harf içermelidir.")
      .matches(/[A-Z]+/, "Şifre en az bir büyük harf içermelidir.")
      .matches(
        /[@$!%*?&]+/,
        "Password must contain at least one special character (@$!%*?&) "
      ),

  });
  
  return (
    <ThemeProvider theme={theme}>
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
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <CssBaseline />
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                component="h1"
                variant="h5"
                sx={{ fontSize: 30, fontWeight: "bold" }}
              >
                Sign Up
              </Typography>
              <Box component="form" noValidate sx={{ mt: 2 }}>
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
              sx={{
                mt: 5,
                mb: 3,
                color: "white",
                fontWeight: "bold",
                backgroundColor: "green",
              }}
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

          <Grid item xs={0} sm={7} md={6}>
            {/* <Container>
            <img src={image} alt="" />
          </Container> */}
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Register;
