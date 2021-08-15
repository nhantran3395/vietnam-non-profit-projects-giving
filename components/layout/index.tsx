import React from 'react';
import { IPropsChildren } from './interfaces';
import { Pane } from 'evergreen-ui';
import Header from '../Header';

const Layout = ({ children }: IPropsChildren) => {
  return (
    <Pane
      width="100%"
      height="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      justifySelf="center"
      flexDirection="column">
      <Header />
      <Pane
        width="100%"
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center">
        {children}
      </Pane>
    </Pane>
  );
};

export default Layout;
