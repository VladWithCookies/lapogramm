import React from 'react';

import { Box, Anchor } from "grommet";
import Avatar from '../../Avatar';

const Header = () => (
  <Box
    className="main-header"
    background="brand"
    gridArea="header"
  >
    <Avatar />
    <Box direction="row" gap="medium">
      <Anchor label="Home" href="#" />
      <Anchor label="Profile" href="#" />
    </Box>
  </Box>
)

export default Header;
