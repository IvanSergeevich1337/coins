import React from 'react';
import {Route, Routes} from "react-router-dom";
import PrivateRoute from "./utils/router/privateRoute";
import {ColorModeContext, useMode} from './theme'
import {CssBaseline, ThemeProvider} from '@mui/material'
import LayoutComponent from "./components/layout";
import WatchlistComponent from "./components/watchlist";
import SettingsComponent from "./components/pages/settings";
import NewsComponent from './components/pages/news';
import Home from './components/pages/home';
import AuthRootComponent from './components/pages/auth';

function App() {
    const [theme, colorMode] = useMode()
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                    <div className="App">
                        <Routes>
                            <Route element={<LayoutComponent />}>
                                <Route element={<PrivateRoute/>}>
                                    <Route path="/" element={<Home/>}/>
                                    <Route path="/watchlist" element={<WatchlistComponent />}/>
                                    <Route path="/news" element={<NewsComponent />}/>
                                    <Route path="/settings" element={<SettingsComponent />}/>
                                </Route>
                                <Route path="login" element={<AuthRootComponent/>}/>
                                <Route path="register" element={<AuthRootComponent/>}/>
                            </Route>
                        </Routes>
                    </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
