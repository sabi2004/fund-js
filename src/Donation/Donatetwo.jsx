import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Donate from './Donate';


const defaultTheme = createTheme();

export default function Donatetwo() {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    alert('DONATED!!');
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          
          <Typography component="h1" variant="h4">
            PAYMENT
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <h4>Mail ID</h4>
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
            <h4>Credit card details</h4>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="firstname"
                  label="First Name"
                  type="text"
                  autoComplete="text"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="lastname"
                  label="Last Name"
                  name="lastname"
                  autoComplete="Last Name"
                />
              </Grid>
            </Grid>
          <TextField
              margin="normal"
              required
              fullWidth
              id="cardnumber"
              label="Card Number"
              name="cardnumber"
               placeholder="1234 1234 1234 1234"
              autoComplete="cardnumber"
              autoFocus
            />
          <TextField
              margin="normal"
              required
              fullWidth
              id="pan"
              label="PAN"
              name="pan"
              autoComplete="number"
              autoFocus
            />
          <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="expiry"
                  label="Expiry"
                  type="date"
                 
                  autoComplete="date"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="cvc"
                  label="CVC"
                  name="cvc"
                  autoComplete="number"
                />
              </Grid>
            </Grid>
            <h4>Amount to be donated</h4>
            <TextField
              margin="normal"
              required
              fullWidth
              id="amount"
              label="Amount(in Rupees)"
              name="amount"
             
              autoComplete="number"
              autoFocus
            />
             <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Donate
            </Button>
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
  );
}