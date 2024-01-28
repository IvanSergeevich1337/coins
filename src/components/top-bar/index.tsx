import { Box, Grid, IconButton, InputBase, useTheme } from '@mui/material';
import React, { useContext } from 'react';
import { useAppSelector } from '../utils/hooks';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNonIcon from '@mui/icons-material/NotificationsNone';
import LightModeIcon from '@mui/icons-material/LightMode';
import { ColorModeContext} from '../theme';
import { useStyles } from './styles';
import { RootState } from '../../store';

const TopBarComponent = () => {
  const user = useAppSelector((state:RootState)=> state.auth.user)
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const classes = useStyles();

  

  return (
    <Box className={classes.root}>
      <Grid>Welcome Alex </Grid>
      <Box display="flex">
        <Grid
          onClick={colorMode.toggleColorMode}
          className={classes.iconBlock}
        >
          <IconButton className={classes.themeIcon}>
            {theme.palette.mode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
          <IconButton>
            <NotificationsNonIcon />
          </IconButton>
        </Grid>
        <Grid className={classes.searchBlock}>
          <IconButton className={classes.searchIcon}>
            <SearchIcon />
          </IconButton>
          <InputBase className={classes.searchInput}  placeholder="Поиск" />
        </Grid>
      </Box>
    </Box>
  );
};

export default TopBarComponent;
