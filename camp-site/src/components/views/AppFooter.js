import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Typography from '../ui/Typography';
import TextField from '../ui/TextField';
import FacebookIcon from '../../assets/facebook.png';
import TwitterIcon from '../../assets/twitter.png';


function Copyright() {
  return (
    <React.Fragment>
      {'©'}
      <Link color="inherit" href="/">
        CampBot Inc.
      </Link>{' '}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

const LANGUAGES = [
  {
    code: 'en-US',
    name: 'English',
  },
];

export default function AppFooter() {
  return (
    <Typography
      component="footer"
      sx={{ display: 'flex', bgcolor: 'secondary.light' }}
    >
      <Container sx={{ my: 8, display: 'flex' }}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              spacing={2}
              sx={{ height: 120 }}
            >
              <Grid item sx={{ display: 'flex', gap: 2}}>
                <a href="/">
                  <img
                    src={FacebookIcon}
                    alt="Facebook"
                    width="40"
                    height="40"
                    padding='10'
                    href="/"
                  />
                </a>
                <a href="/">
                  <img
                    src={TwitterIcon}
                    alt="Twitter"
                    width="40"
                    height="40"
                    href="/"
                  />
                </a>
              </Grid>
              <Grid item sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                <Copyright />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h6" marked="left" align='left' gutterBottom>
              Legal
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
              <Box component="li" sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                <Link href="/terms/">Terms</Link>
              </Box>
              <Box component="li" sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                <Link href="/privacy/">Privacy</Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} sm={8} md={4}>
            <Typography variant="h6" marked="left" align='left' gutterBottom>
              Language
            </Typography>
            <TextField
              select
              size="medium"
              variant="standard"
              SelectProps={{
                native: true,
              }}
              sx={{ mt: 1, width: 150, display: 'flex', justifyContent: 'flex-start' }}
            >
              {LANGUAGES.map((language) => (
                <option value={language.code} key={language.code}>
                  {language.name}
                </option>
              ))}
            </TextField>
          </Grid>
          <Grid item>
            <Typography variant="caption">
              {'Icons made by '}
              <Link href="https://www.freepik.com" rel="sponsored" title="Freepik">
                Freepik
              </Link>
              {' from '}
              <Link href="https://www.flaticon.com" rel="sponsored" title="Flaticon">
                www.flaticon.com
              </Link>
              {' is licensed by '}
              <Link
                href="https://creativecommons.org/licenses/by/3.0/"
                title="Creative Commons BY 3.0"
                target="_blank"
                rel="noopener noreferrer"
              >
                CC 3.0 BY
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}
