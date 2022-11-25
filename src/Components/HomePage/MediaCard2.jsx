import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard2() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="240"
        image="./assets/card3.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Holidaying Abroad?
        </Typography>
        <Typography variant="body2" color="text.secondary">
          No need to carry foreign currency. just pay using your app or by our PayIt card instantly! with lowest Forex charges.
        </Typography>
      </CardContent>
      
    </Card>
  );
}