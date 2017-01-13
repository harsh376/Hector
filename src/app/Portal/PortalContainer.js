import React from 'react';

import Signin from './components/Signin';
import Signup from './components/Signup';

// TODO: Add tests for component

function PortalContainer() {
  return (
    <div>
      <Signin />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Signup />
    </div>
  );
}

PortalContainer.title = 'portal';

export default PortalContainer;
