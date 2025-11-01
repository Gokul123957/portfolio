import { Box, Container, Typography, Grid, TextField, Button, Stack, Link } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import { resumeData } from '../data/resumeData';

const Contact = () => {
  const { email, phone, github } = resumeData.personalInfo;

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ mb: 4 }}>
          Contact Me
        </Typography>
        
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Stack spacing={3}>
              <Typography variant="h6">Get in Touch</Typography>
              <Stack direction="row" spacing={1} alignItems="center">
                <EmailIcon color="primary" />
                <Link href={`mailto:${email}`} color="inherit" underline="hover">
                  {email}
                </Link>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <PhoneIcon color="primary" />
                <Link href={`tel:${phone}`} color="inherit" underline="hover">
                  {phone}
                </Link>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <GitHubIcon color="primary" />
                <Link 
                  href={`https://github.com/${github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                  underline="hover"
                >
                  {github}
                </Link>
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box component="form" onSubmit={handleSubmit} noValidate>
              <Stack spacing={3}>
                <TextField
                  required
                  fullWidth
                  label="Name"
                  name="name"
                  autoComplete="name"
                />
                <TextField
                  required
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  autoComplete="email"
                />
                <TextField
                  required
                  fullWidth
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                />
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{ width: '100%' }}
                >
                  Send Message
                </Button>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;