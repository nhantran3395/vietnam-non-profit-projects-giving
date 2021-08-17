import React, { useState } from 'react';
import NextLink from 'next/link';
import { Pane, Tablist, Tab, Link } from 'evergreen-ui';
import { IPagePath } from './interfaces';

const homePath = { name: 'Start Here', path: '/' };
const explorePath = { name: 'Explore', path: '/explore' };

const paths = [homePath, explorePath];

const NavBar = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [tabs] = React.useState<IPagePath[]>(paths);

  return (
    <Pane>
      <Tablist>
        {tabs.map((tab, index) => (
          <Tab
            key={tab.name}
            id={tab.name}
            onSelect={() => setSelectedIndex(index)}
            isSelected={index === selectedIndex}
            aria-controls={`panel-${tab.name}`}>
            <NextLink href={tab.path}>
              <Link>{tab.name}</Link>
            </NextLink>
          </Tab>
        ))}
      </Tablist>
    </Pane>
  );
};

export default NavBar;
