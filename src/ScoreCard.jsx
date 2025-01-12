import React from 'react';
import { Card, CardContent, Typography, Grid, Button, Avatar, LinearProgress, Box } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const ScoreCard = () => {
  return (
    <Card sx={{ maxWidth: 350, borderRadius: 4, boxShadow: 3, padding: 2 }}>
      <CardContent>
        {/* Passed Section */}
        <Grid container alignItems="center" spacing={2}>
          <Grid item>
            <CheckCircleOutlineIcon sx={{ fontSize: 40, color: '#4CAF50' }} />
          </Grid>
          <Grid item>
            <Typography variant="h6" color="textPrimary">
              YOU'VE PASSED
            </Typography>
            <Typography variant="h4" color="primary" fontWeight="bold">
              136 / 240
            </Typography>
          </Grid>
          <Grid item xs>
            <Box display="flex" justifyContent="flex-end">
              <Box textAlign="center">
                <Typography variant="body2" color="textSecondary">
                  76% ACCURACY
                </Typography>
                <LinearProgress variant="determinate" value={76} sx={{ height: 10, borderRadius: 5, mt: 0.5 }} />
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box mt={4} />

        {/* Top Score Section */}
        <Grid container alignItems="center" spacing={2}>
          <Grid item>
            <Avatar alt="User" src="https://via.placeholder.com/50" sx={{ width: 50, height: 50 }} />
          </Grid>
          <Grid item>
            <Typography variant="h6" color="textPrimary">
              Top Score
            </Typography>
            <Typography variant="h4" color="secondary" fontWeight="bold">
              230 / 240
            </Typography>
            <Typography variant="caption" color="textSecondary">
              By Parth Akotkar
            </Typography>
          </Grid>
          <Grid item xs>
            <Box display="flex" justifyContent="flex-end">
              <Box textAlign="center">
                <Typography variant="body2" color="textSecondary">
                  92% ACCURACY
                </Typography>
                <LinearProgress variant="determinate" value={92} sx={{ height: 10, borderRadius: 5, mt: 0.5 }} />
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box mt={4} />

        {/* Improve Section */}
        <Typography variant="subtitle1" color="textPrimary" gutterBottom>
          Improve your Marks
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Improve your score by practicing more.
        </Typography>

        <Box mt={2}>
          <Button variant="contained" color="primary" fullWidth>
            Practice more
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ScoreCard;
