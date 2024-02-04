import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../../utils/hook';
import { getFavoriteAssets } from '../../../store/thunks/assets';
import { Box, Grid } from '@mui/material';
import { useStyles } from './style';
import { clearFavoriteAssets } from '../../../store/slice/assets';

const Home = () => {
  const favoriteAssets: any[] = useAppSelector((state) => state.assets.favoriteAssets);
  const dispatch = useAppDispatch();
  const classes = useStyles();
  const fetchDataRef = useRef(false);
  const favouriteAssetName = useMemo(() => ['bitcoin', 'ethereum'], []);
  console.log('favoriteAssets', favoriteAssets);

  const fetchData = useCallback(
    (data: string[]) => {
      data.forEach((el: string) => {
        dispatch(getFavoriteAssets(el));
      });
    },
    [dispatch]
  );

  useEffect(() => {
    if (fetchDataRef.current) return;
    fetchDataRef.current = true;
    fetchData(favouriteAssetName);
    return () => {
      dispatch(clearFavoriteAssets());
    };
  }, [favouriteAssetName, fetchData, dispatch]);

  const renderFavoriteGraph = favoriteAssets.map((item: any) => {
    const currentPrice = item.data.prices[0];
    const currentCap = item.data.market_caps[0];
    return (
      <Grid key={item.name} item xs={12} sm={6} lg={6}>
        <Grid container className={classes.topCardItem}>
          <Grid item xs={12} sm={6} lg={6}>
            <h3 className={classes.assetName}>{item.name}</h3>
            <div className={classes.itemDetails}>
              <h3 className={classes.cardPrice}>${currentPrice[1].toFixed(2)}</h3>
              <p className={classes.cardCapitalize}>${currentCap[1].toFixed(0)}</p>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} lg={6}>
            <h5>Chart</h5>
          </Grid>
        </Grid>
      </Grid>
    );
  });

  return (
    <div>
      <Box className={classes.root}>
        <Grid container spacing={2}>
          {renderFavoriteGraph}
        </Grid>
      </Box>
    </div>
  );
};

export default Home;
