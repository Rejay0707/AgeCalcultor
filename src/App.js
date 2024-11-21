import React from 'react';
import { Container, CssBaseline, Box } from '@mui/material';
import AgeCalculator from './components/AgeCalculator.jsx';

const App = () => {
  return (
    <>
      <CssBaseline />
      <Box 
        sx={{
          backgroundImage: 'url(https://img.freepik.com/premium-photo/young-old-same-man-aging-concept-ai-generated_268835-8891.jpg)', // Add your image URL here
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Container maxWidth="sm">
          <AgeCalculator />
        </Container>
      </Box>
    </>
  );
};

export default App;
