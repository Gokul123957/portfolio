import { Box, Container, Typography, Grid, Card, CardContent, Chip, Stack } from '@mui/material';
import { resumeData } from '../data/resumeData';

const Projects = () => {
  return (
    <Box
      component="section"
      sx={{
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ mb: 4 }}>
          Projects
        </Typography>
        <Grid container spacing={3}>
          {resumeData.projects.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h5" component="h3" sx={{ mb: 2 }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {project.description}
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {project.technologies.map((tech, techIndex) => (
                      <Chip
                        key={techIndex}
                        label={tech}
                        size="small"
                        sx={{ mt: 1 }}
                      />
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;