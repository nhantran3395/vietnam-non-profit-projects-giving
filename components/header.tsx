import React from 'react';
import { Pane, Heading } from 'evergreen-ui';

const Header = () => {
  return (
    <Pane
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center">
      <Heading size={900}>Header</Heading>
    </Pane>
  );
};

export default Header;
