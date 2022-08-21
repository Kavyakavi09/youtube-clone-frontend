import Menu from './components/Menu/Menu';
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Container, Main, Wrapper } from './style';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './utils/Theme';
import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';
import Video from './pages/Video/Video';
import Search from './pages/Search/Search';
import { useSelector } from 'react-redux';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const { currentUser } = useSelector((state) => state.user);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <BrowserRouter>
          <Menu setDarkMode={setDarkMode} darkMode={darkMode} />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path='/'>
                  <Route index element={<Home type='random' />} />
                  <Route path='trends' element={<Home type='trend' />} />
                  <Route path='subscriptions' element={<Home type='sub' />} />
                  <Route path='search' element={<Search />} />
                  <Route
                    path='signin'
                    element={currentUser ? <Home /> : <SignIn />}
                  />
                  <Route path='video'>
                    <Route path=':id' element={<Video />} />
                  </Route>
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
