import React from 'react';
import {
  Container,
  // Logo,
  Wrapper,
  // Img,
  // Item,
  // Hr,
  // Login,
  // Title,
  // Button,
  Itemmenu,
  Items,
} from './style';
// import kavyaTube from '../../Img/logo.png';
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
// import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
// import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
// import SportsBasketballOutlinedIcon from '@mui/icons-material/SportsBasketballOutlined';
// import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined';
// import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
// import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
// import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
// import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
// import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
// import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SettingsBrightnessOutlinedIcon from '@mui/icons-material/SettingsBrightnessOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';

function Menu({ darkMode, setDarkMode }) {
  // const { currentUser } = useSelector((state) => state.user);
  return (
    <Container>
      <Wrapper>
        <Itemmenu>
          <MenuIcon />
        </Itemmenu>
        <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
          <Items>
            <HomeIcon sx={{ marginBottom: '4px' }} />
            Home
          </Items>
        </Link>
        <Link to='trends' style={{ textDecoration: 'none', color: 'inherit' }}>
          <Items>
            <ExploreOutlinedIcon sx={{ marginBottom: '4px' }} />
            Explore
          </Items>
        </Link>
        <Link
          to='subscriptions'
          style={{ textDecoration: 'none', color: 'inherit' }}>
          <Items>
            <SubscriptionsOutlinedIcon sx={{ marginBottom: '4px' }} />
            Subscriptions
          </Items>
        </Link>

        <Items>
          <VideoLibraryOutlinedIcon sx={{ marginBottom: '4px' }} />
          Library
        </Items>
        <Items>
          <HistoryOutlinedIcon sx={{ marginBottom: '4px' }} />
          History
        </Items>

        <Items onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessOutlinedIcon sx={{ marginBottom: '4px' }} />
          {darkMode ? 'Light' : 'Dark'} Mode
        </Items>

        {/* <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
          <Logo>
            <Img src={kavyaTube} alt='kavyaTube' />
            KavyaTube
          </Logo>
        </Link> */}
        {/* <Itemmenu>
          <MenuIcon />
        </Itemmenu>
        <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
          <Item>
            <HomeIcon />
            Home
          </Item>
        </Link>
        <Link to='trends' style={{ textDecoration: 'none', color: 'inherit' }}>
          <Item>
            <ExploreOutlinedIcon />
            Explore
          </Item>
        </Link>
        <Link
          to='subscriptions'
          style={{ textDecoration: 'none', color: 'inherit' }}>
          <Item>
            <SubscriptionsOutlinedIcon />
            Subscriptions
          </Item>
        </Link>
        <Hr />
        <Item>
          <VideoLibraryOutlinedIcon />
          Library
        </Item>
        <Item>
          <HistoryOutlinedIcon />
          History
        </Item>
        <Hr />
        {!currentUser && (
          <>
            <Login>
              Sign in to like videos, comment, and subscribe.
              <Link to='signin' style={{ textDecoration: 'none' }}>
                <Button>
                  <AccountCircleOutlinedIcon />
                  SIGN IN
                </Button>
              </Link>
            </Login>
            <Hr />
          </>
        )}
        <Title>BEST OF KAVYATUBE</Title>
        <Item>
          <LibraryMusicOutlinedIcon />
          Music
        </Item>
        <Item>
          <SportsBasketballOutlinedIcon />
          Sports
        </Item>
        <Item>
          <SportsEsportsOutlinedIcon />
          Gaming
        </Item>
        <Item>
          <MovieOutlinedIcon />
          Movies
        </Item>
        <Item>
          <ArticleOutlinedIcon />
          News
        </Item>
        <Item>
          <LiveTvOutlinedIcon />
          Live
        </Item>
        <Hr />
        <Item>
          <SettingsOutlinedIcon />
          Settings
        </Item>
        <Item>
          <FlagOutlinedIcon />
          Report
        </Item>
        <Item>
          <HelpOutlineOutlinedIcon />
          Help
        </Item>
        <Item onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessOutlinedIcon />
          {darkMode ? 'Light' : 'Dark'} Mode
        </Item> */}
      </Wrapper>
    </Container>
  );
}

export default Menu;
