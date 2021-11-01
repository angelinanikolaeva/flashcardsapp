import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

import { Link } from "react-router-dom";
import {
  Button,
  CssBaseline,
  TextField,
  Alert,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function ForgotPassword() {
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(data.get("email"));
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to reset password");
    }

    setLoading(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Password reset
          </Typography>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
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

            <Button
              disabled={loading}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Reset Password
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/login" variant="body2">
                  Remember password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/signup" variant="body2">
                  Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
  //     <>
  //       <Card>
  //         <Card.Body>
  //           <h2 className="text-center mb-4">Password Reset</h2>
  //           {error && <Alert variant="danger">{error}</Alert>}
  //           {message && <Alert variant="success">{message}</Alert>}
  //           <Form onSubmit={handleSubmit}>
  //             <Form.Group id="email">
  //               <Form.Label>Email</Form.Label>
  //               <Form.Control type="email" ref={emailRef} required />
  //             </Form.Group>
  //             <Button disabled={loading} className="w-100" type="submit">
  //               Reset Password
  //             </Button>
  //           </Form>
  //           <div className="w-100 text-center mt-3">
  //             <Link to="/login">Login</Link>
  //           </div>
  //         </Card.Body>
  //       </Card>
  //       <div className="w-100 text-center mt-2">
  //         Need an account? <Link to="/signup">Sign Up</Link>
  //       </div>
  //     </>
  //   );
}
