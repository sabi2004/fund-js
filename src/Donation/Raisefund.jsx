import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const defaultTheme = createTheme();

export default function Raisefund() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
        firstname:data.get('firstname'),
      email: data.get('email'),
      password: data.get('password'),
    });
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
            RAISE FUND
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <h4>User details</h4>
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
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
             <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="age"
                  label="Age"
                  name="age"
                  type="number"
                  autoComplete="age"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="dob"
                  label="Date of Birth"
                  type="date"
                  autoComplete="date"
                
                />
              </Grid>
            </Grid>
            <TextField
              margin="normal"
              required
              fullWidth
              id="number"
              label="Phone Number"
              name="number"
              type="tel"
              autoComplete="Phone Number"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="address"
              label="Street Address"
              name="address"
              autoComplete="address"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="address"
              label="Street Address Line 2"
              name="address"
              autoComplete="address"
              autoFocus
            />
             <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="statename"
                  label="State"
                  name="state"
                  autoComplete="text"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="countryname"
                  label="Country"
                  type="text"
                  autoComplete="text"
                
                />
              </Grid>
            </Grid>
            <TextField
              margin="normal"
              required
              fullWidth
              id="address"
              label="Pincode"
              name="address"
              autoComplete="address"
              autoFocus
            />
            <h4>Fund raising details</h4>
            {/* <TextField
              margin="normal"
              required
              fullWidth
              id="field"
              label="Select a field"
              
              name="address"
              autoComplete="address"
              autoFocus
            /> */}
            <FormControl variant="filled" sx={{ m: 1,minWidth:180}}>
        <InputLabel id="demo-simple-select-filled-label">Required field</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
         
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Educational requirement</MenuItem><br/>
          <MenuItem value={20}>Sports requirement</MenuItem>
          <MenuItem value={30}>Nonprofits and Charities</MenuItem>
          <MenuItem value={30}>Corporate Social needs</MenuItem>
          <MenuItem value={30}>Animal Fundraising</MenuItem>
          <MenuItem value={30}>Social Enterprises</MenuItem>
        </Select>
      </FormControl>
            
            <Link to="/Raisetwo" style={{ textDecoration: 'none' }}>
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                type="submit"
              >
                Proceed
              </Button>
            </Link>
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
  );
}