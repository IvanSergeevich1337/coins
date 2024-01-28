import React from 'react';
import Home from './components/home';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/utils/router/privateRoute';
import AuthRootComponent from './components/auth';
import { ColorModeContext, useMode } from './components/theme';
import { ThemeProvider, CssBaseline } from '@mui/material';
import LayoutComponent from './components/layout';
import NewsComponent from './components/news';
import { SettingsComponent } from './components/settings';
import WatchListComponent from './components/watchlist';

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LayoutComponent>
          <div className="App">
            <Routes>
              <Route element={<PrivateRoute />}>
                <Route path="/" element={<Home />} />
                <Route path="/news" element={<NewsComponent />} />
                <Route path="/settings" element={<SettingsComponent />} />
                <Route path="/watchlist" element={<WatchListComponent />} />
              </Route>
              <Route path="login" element={<AuthRootComponent />} />
              <Route path="register" element={<AuthRootComponent />} />
            </Routes>
          </div>
        </LayoutComponent>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
