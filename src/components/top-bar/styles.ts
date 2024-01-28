import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { tokens } from '../theme';

export const useStyles = makeStyles((theme: Theme) => {
  const colors = tokens(theme.palette.mode);
  return {
    searchIcon: {
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    iconBlock: {
      paddingRight: '37px',
      borderRight: `1px solid ${colors.borderColor}`,
      paddingTop: '10px',
    },
    toolbar: {
      justifyContent: 'space-between',
      padding:'20px 40px'
    },
    root: {
      position: 'static',
      background: `${colors.primary.DEFAULT}`,
      borderBottom: `1px solid ${colors.borderColor}`,
      boxShadow:'none'
    },
    themeIcon: {
      marginRight: '45px',
    },
    searchBlock: {
      display: 'flex',
      maxHeight:'45px',
      borderRadius: '8px',
      marginLeft: '28px',
      backgroundColor: `${colors.primary[600]}`,
    },
    searchInput: {
      padding: '12px 18px',
    },
    menuIcon: {
      marginRight:'10px',
      cursor:'pointer',
      
    }
  };
});
