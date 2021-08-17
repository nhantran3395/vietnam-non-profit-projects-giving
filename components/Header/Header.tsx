import React from 'react';
import NextLink from 'next/link';
import { Pane, Heading, Link } from 'evergreen-ui';
import NavBar from '../Navbar';
import AppLogo from '../AppLogo';

const Header = () => {
  return (
    <Pane
      width="80%"
      display="flex"
      alignItems="center"
      justifyContent="space-between">
      <NextLink href="/">
        <Link
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          cursor="pointer">
          <Heading size={900}>Vietnam Giving</Heading>
          <AppLogo />
        </Link>
      </NextLink>
      <NavBar />
    </Pane>
  );
};

export default Header;
