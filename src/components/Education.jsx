import { Box, Container, Typography } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { resumeData } from '../data/resumeData';

const Education = () => {
  return (
    <Box
      component="section"
      sx={{
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ mb: 4 }}>
          Education
        </Typography>
        <Timeline position="alternate">
          {resumeData.education.map((edu, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot color="primary" />
                {index !== resumeData.education.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="h6" component="h3">
                    {edu.degree}
                  </Typography>
                  <Typography variant="subtitle1" color="primary">
                    {edu.institution}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {edu.period}
                  </Typography>
                  {edu.score && (
                    <Typography variant="body2" color="text.secondary">
                      Score: {edu.score}
                    </Typography>
                  )}
                </Box>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Box>
  );
};

export default Education;