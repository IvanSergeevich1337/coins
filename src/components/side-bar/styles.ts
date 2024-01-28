import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { tokens } from '../theme';

export const useStyles = makeStyles((theme: Theme) => {
  const colors = tokens(theme.palette.mode);
  return {
    brand: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '30px 15px',
      cursor: 'pointer',
    },
    navItem: {
      '&:hover': {
        backgroundColor: '#19005D !important',
        color: '#fff',
        borderRadius: '4px',
        '& .MuiSvgIcon-root': {
          color:`${colors.white.DEFAULT}`,
        },
      },
    },
    navBlock: {
      borderBottom: `1px solid ${colors.borderColor}`,
      width: '100%',
    },
    navList: {
      marginBottom: '55px',
    },
    brandTitle: {
      color: `${theme.palette.mode === 'dark' ? colors.white.DEFAULT : colors.black.DEFAULT}`,
    },
  };
});
