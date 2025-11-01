import { Box, Container, Typography } from '@mui/material';

const Experience = () => {
  return (
    <Box
      component="section"
      sx={{
        py: 8,
        display: 'none', // Hidden since no experience data is available
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ mb: 4 }}>
          Experience
        </Typography>
      </Container>
    </Box>
  );
};

export default Experience;