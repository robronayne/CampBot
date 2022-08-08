import * as React from 'react';
import AppFooter from '../../components/views/AppFooter';
import Front from '../../components/views/Front';
import AppBar from '../../components/views/AppBar';
import withRoot from '../../components/withRoot';

function Home() {
  return (
    <React.Fragment>
      <AppBar />
      <Front />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Home);
