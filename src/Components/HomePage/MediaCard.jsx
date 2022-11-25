import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="240"
        image="./assets/card1.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Easy and Fast Payment
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Pay at any Merchant outlet form your mobile by just scanning a QR code. Payment gets done quicly and securely.
        </Typography>
      </CardContent>
      
    </Card>

    
  );
}