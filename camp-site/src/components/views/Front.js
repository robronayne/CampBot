import * as React from 'react';
import Button from '../ui/Button';
import Typography from '../ui/Typography';
import FrontLayout from './FrontLayout';
import BackgroundImage from '../../assets/campsite.jpg'

export default function Front() {
  return (
    <FrontLayout
      sxBackground={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={BackgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Reserve your next getaway
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        Automatically book campsites ahead of the crowds with the click of a button.
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="/sign-up/"
        sx={{ minWidth: 200 }}
      >
        Register
      </Button>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Start booking today
      </Typography>
    </FrontLayout>
  );
}
