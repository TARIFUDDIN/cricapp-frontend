import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';

const MultiStageForm = () => {
  const [stage, setStage] = useState(1);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    setStage(stage + 1);
  };

  const handlePrevious = () => {
    setStage(stage - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/v1/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Registration successful');
      } else {
        alert('Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error occurred during registration');
    }
  };

  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', padding: 2 }}>
      {stage === 1 && (
        <>
          <Typography variant="h5" gutterBottom>Step 1: Personal Information</Typography>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <Button variant="contained" color="primary" onClick={handleNext}>Next</Button>
        </>
      )}
      {stage === 2 && (
        <>
          <Typography variant="h5" gutterBottom>Step 2: Account Details</Typography>
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <Button variant="contained" color="secondary" onClick={handlePrevious}>Previous</Button>
          <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
        </>
      )}
    </Box>
  );
};

export default MultiStageForm;
