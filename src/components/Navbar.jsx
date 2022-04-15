// @ts-nocheck
import styled from '@emotion/styled';
import { FilterVintage, Mail, Notifications } from '@mui/icons-material';
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%',
}));

const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  gap: '20px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const rn = Math.floor(Math.random() * 10);
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography
          variant='h6'
          fontSize='x-large'
          fontWeight={600}
          sx={{
            display: {
              xs: 'none',
              sm: 'block',
            },
          }}
        >
          React MUI
        </Typography>
        <FilterVintage
          sx={{
            display: {
              xs: 'block',
              sm: 'none',
            },
          }}
        />
        <Search>
          <InputBase placeholder='Search...' />
        </Search>
        <Icons>
          <Badge badgeContent={rn} color='error'>
            <Mail />
          </Badge>
          <Badge badgeContent={rn + 3} color='error'>
            <Notifications />
          </Badge>
          <Avatar src={`https://randomuser.me/api/portraits/women/${rn}.jpg`} onClick={(e) => setOpen(true)} />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar src={`https://randomuser.me/api/portraits/women/${rn}.jpg`} />
          <Typography variant='span'>Lisa</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id='demo-positioned-menu'
        aria-labelledby='demo-positioned-button'
        // anchorEl={anchorEl}
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
