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
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import image from "../assets/back5.jpeg";
import { object, string } from "yup";
import useApiRequest from "../hooks/useApiRequest";
import { Formik, Form, Field, ErrorMessage } from "formik";

const theme = createTheme();

const Register = () => {
  const { register } = useApiRequest();

  const registerSchema = object({
    username: string().required("Please enter a username"),
    firstName: string().required("Please enter a first name"),
    lastName: string().required("Please enter a last name"),
    email: string()
      .email("Please, enter a valid email")
      .required("Email required"),
    password: string()
      .required("Please enter a password")
      .min(8, "Password must be at least 8 characters")
      .max(16, "Password must be at most 16 characters")
      .matches(/\d+/, "Password must contain at least one digit")
      .matches(/[a-z]+/, "Password must contain at least one lowercase letter")
      .matches(/[A-Z]+/, "Password must contain at least one uppercase letter")
      .matches(
        /[@$!%*?&]+/,
        "Password must contain at least one special character (@$!%*?&)"
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

              <Formik
                initialValues={{
                  username: "",
                  firstName: "",
                  lastName: "",
                  email: "",
                  password: "",
                }}
                validationSchema={registerSchema}
                onSubmit={(values, actions) => {
                  register(values);
                  actions.resetForm();
                  actions.setSubmitting(false);
                }}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <Box sx={{ mt: 2 }}>
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <Field
                            as={TextField}
                            variant="outlined"
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoComplete="username"
                            helperText={<ErrorMessage name="username" />}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Field
                            as={TextField}
                            variant="outlined"
                            fullWidth
                            id="firstName"
                            label="First Name"
                            name="firstName"
                            autoComplete="fname"
                            helperText={<ErrorMessage name="firstName" />}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Field
                            as={TextField}
                            variant="outlined"
                            fullWidth
                            id="lastName"
                            label="Last Name"
                            name="lastName"
                            autoComplete="lname"
                            helperText={<ErrorMessage name="lastName" />}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Field
                            as={TextField}
                            variant="outlined"
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            helperText={<ErrorMessage name="email" />}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Field
                            as={TextField}
                            variant="outlined"
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="new-password"
                            helperText={<ErrorMessage name="password" />}
                          />
                        </Grid>
                      </Grid>

                
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
                        disabled={isSubmitting}
                      >
                        Sign Up
                      </Button>
                    </Box>
                  </Form>
                )}
              </Formik>
            </Box>
            <Grid
              container
              justifyContent="center"
              display="flex"
              flexDirection="column"
            >
              <Grid item>
                <Link href="/login" variant="body2">
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
