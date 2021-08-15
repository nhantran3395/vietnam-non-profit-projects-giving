import React from 'react';
import { Pane, Heading } from 'evergreen-ui';
import NavBar from '../Navbar';

const Header = () => {
  return (
    <Pane
      width="80%"
      display="flex"
      alignItems="center"
      justifyContent="space-between">
      <Pane>
        <Heading size={900}>Vietnam Giving</Heading>
      </Pane>
      <NavBar />
    </Pane>
  );
};

export default Header;
