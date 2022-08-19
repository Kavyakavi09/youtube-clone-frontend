import React, { useState } from 'react';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import { Container, Wrapper, Search, Input, Button, User } from './style';
import { useSelector } from 'react-redux';
import { deepPurple } from '@mui/material/colors';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser);

  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder='Search' type='search' />
          <SearchOutlinedIcon />
        </Search>
        {currentUser ? (
          <User>
            <VideoCallOutlinedIcon onClick={() => setOpen(true)} />
            <Avatar src={currentUser?.img}></Avatar>
            {currentUser.name}
          </User>
        ) : (
          <Link to='signin' style={{ textDecoration: 'none' }}>
            <Button>
              <AccountCircleOutlinedIcon />
              SIGN IN
            </Button>
          </Link>
        )}
      </Wrapper>
    </Container>
  );
};

export default Navbar;
