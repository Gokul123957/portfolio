import { Box, Container, Typography, Grid, Paper, Chip, Stack } from '@mui/material';
import { resumeData } from '../data/resumeData';

const Skills = () => {
  const { programmingAndWeb, database, versionControl, other } = resumeData.skills;

  const skillCategories = [
    { title: 'Programming & Web', skills: programmingAndWeb },
    { title: 'Database', skills: database },
    { title: 'Version Control', skills: versionControl },
    { title: 'Other Skills', skills: other },
  ];

  return (
    <Box
      component="section"
      sx={{
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ mb: 4 }}>
          Skills
        </Typography>
        <Grid container spacing={3}>
          {skillCategories.map((category, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper
                elevation={0}
                variant="outlined"
                sx={{
                  p: 3,
                  height: '100%',
                }}
              >
                <Typography variant="h6" sx={{ mb: 2 }}>
                  {category.title}
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  {category.skills.map((skill, skillIndex) => (
                    <Chip
                      key={skillIndex}
                      label={skill}
                      sx={{ mt: 1 }}
                    />
                  ))}
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;