import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { resumeData } from '../data/resumeData';

const Certifications = () => {
  return (
    <Box
      component="section"
      sx={{
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ mb: 4 }}>
          Certifications
        </Typography>
        <Grid container spacing={3}>
          {resumeData.certifications.map((cert, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6" component="h3">
                    {cert.title}
                  </Typography>
                  {cert.issuer && (
                    <Typography variant="body2" color="text.secondary">
                      {cert.issuer}
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Certifications;