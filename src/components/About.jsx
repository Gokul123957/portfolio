import { Box, Container, Typography } from '@mui/material';
import { resumeData } from '../data/resumeData';

const About = () => {
  const { summary } = resumeData.personalInfo;

  return (
    <Box
      component="section"
      sx={{
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ mb: 4 }}>
          About Me
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 800 }}>
          {summary}
        </Typography>
      </Container>
    </Box>
  );
};

export default About;