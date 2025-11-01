import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';

const Hero = () => {
  const { name, role, summary } = resumeData.personalInfo;

  return (
    <Box
      component="section"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        pt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={4} sx={{ maxWidth: 800 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 'bold',
                mb: 2,
              }}
            >
              {name}
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Typography
              variant="h2"
              color="primary"
              sx={{
                fontSize: { xs: '1.5rem', md: '2rem' },
                mb: 3,
              }}
            >
              {role}
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1rem', md: '1.25rem' },
                mb: 4,
                color: 'text.secondary',
              }}
            >
              {summary}
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                size="large"
                href="#contact"
                sx={{ minWidth: 150 }}
              >
                Contact Me
              </Button>
              <Button
                variant="outlined"
                size="large"
                href="/resume.pdf"
                target="_blank"
                sx={{ minWidth: 150 }}
              >
                Download CV
              </Button>
            </Stack>
          </motion.div>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;