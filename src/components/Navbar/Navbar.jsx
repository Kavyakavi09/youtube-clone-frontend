import React, { useState } from 'react';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import { Container, Wrapper, Search, Input, Button, User } from './style';
import { useSelector } from 'react-redux';
import { deepPurple } from '@mui/material/colors';
import Upload from '../Upload/Upload';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { currentUser } = useSelector((state) => state.user);

  return (
    <>
      <Container>
        <Wrapper>
          <Search>
            <Input placeholder='Search' type='search' />
            <SearchOutlinedIcon />
          </Search>
          {currentUser ? (
            <User>
              <VideoCallOutlinedIcon
                onClick={() => setOpen(true)}
                sx={{ cursor: 'pointer' }}
              />
              <Avatar
                src={`${currentUser?.img}`}
                sx={{ bgcolor: deepPurple[500] }}>
                {currentUser?.name?.charAt(0)}
              </Avatar>
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
      {open && <Upload setOpen={setOpen} />}
    </>
  );
};

export default Navbar;
