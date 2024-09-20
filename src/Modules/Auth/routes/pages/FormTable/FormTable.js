import React, { useState } from 'react';
import { Box, Button, Grid, TextField, Typography, Container, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, MenuItem, Select, InputLabel } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

const MovieBookingForm = () => {
  // State to handle form values and calculated total price
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search); // Get search params from URL
  const movieName = queryParams.get("name");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    // movieName: '',
    ticketType: 'economy',
    numberOfTickets: 1
  });

  const ticketPrices = {
    economy: 500,
    gold: 800,
    redLounge: 15000
  };

  // Calculate total price based on selected ticket type and number of tickets
  const calculateTotalPrice = () => {
    return ticketPrices[formData.ticketType] * formData.numberOfTickets;
  };

  // Function to handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    console.log('Total Price:', calculateTotalPrice());
    // Add form submission logic here
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, px: 2 }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ color: '#3f51b5', fontWeight: 'bold' }}>
        Movie Booking Form
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2, backgroundColor: '#f0f4f8', padding: 4, borderRadius: 2 }}>
        <Grid container spacing={3}>
          {/* Name Field */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              sx={{ backgroundColor: '#fff' }}
            />
          </Grid>
          {/* Email Field */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              sx={{ backgroundColor: '#fff' }}
            />
          </Grid>
          {/* Movie Name Field */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Movie Name"
              variant="outlined"
              name="movieName"
              value={movieName}
              onChange={handleChange}
              required
              sx={{ backgroundColor: '#fff' }}
            />
          </Grid>
          {/* Number of Tickets */}
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="number-of-tickets-label">Number of Tickets</InputLabel>
              <Select
                labelId="number-of-tickets-label"
                id="numberOfTickets"
                name="numberOfTickets"
                value={formData.numberOfTickets}
                onChange={handleChange}
                required
                label="Number of Tickets"
              >
                {[...Array(10).keys()].map((i) => (
                  <MenuItem key={i + 1} value={i + 1}>
                    {i + 1}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          {/* Ticket Price Options */}
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend" sx={{ color: '#3f51b5' }}>Ticket Type</FormLabel>
              <RadioGroup
                row
                aria-label="ticketType"
                name="ticketType"
                value={formData.ticketType}
                onChange={handleChange}
              >
                <FormControlLabel value="economy" control={<Radio />} label="Economy (RS 500)" />
                <FormControlLabel value="gold" control={<Radio />} label="Gold (RS 800)" />
                <FormControlLabel value="redLounge" control={<Radio />} label="Red Lounge (RS 1500)" />
              </RadioGroup>
            </FormControl>
          </Grid>
          {/* Total Price Display */}
          <Grid item xs={12}>
            <Typography variant="h6" align="center" sx={{ color: '#3f51b5' }}>
              Total Price: {calculateTotalPrice()} PKR
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{
              backgroundColor: '#3f51b5',
              '&:hover': {
                backgroundColor: '#2e3b8b',
              },
              padding: '10px 20px',
              fontSize: '16px',
            }}
          >
            Book Now
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default MovieBookingForm;
