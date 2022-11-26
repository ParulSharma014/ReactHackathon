import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom style={{color:"#5E10B1", fontWeight:'bold'}}>
          Go Digital !!!
        </Typography>
        <Typography variant="h5" component="div" style={{color:"purple", fontWeight:'bold' }}>
         <h1> NatWest {bull}Pay{bull}Wallet</h1>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary" >
          Easy {bull} Fast {bull} Secure {bull} Rewarding
        </Typography>
        <Typography variant="body2">
         <h6> Using our all new NatWest Pay Wallet service. it is super easy, fast, reliable and rewarding too. Load money into the wallet or use your NatWest Debit or Credit card and earn Rewards.</h6>
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href='/Services' style={{color:"purple",fontWeight:'bold'}}>Know More</Button> 
      </CardActions>
    </Card>
  );
}