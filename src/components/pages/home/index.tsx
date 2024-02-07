import React, { FC, useCallback, useEffect, useMemo, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../../utils/hook';
import { getFavoriteAssets } from '../../../store/thunks/assets';
import { Box, Grid } from '@mui/material';
import { useStyles } from './style';
import { clearFavoriteAssets } from '../../../store/slice/assets';
import TestGraph from '../../charts/test';
import TrendUp from '../../../assets/images/chart/TrendUp.svg';
import TrendDown from '../../../assets/images/chart/TrendDown.svg';

const Home: FC = (): JSX.Element => {
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

  const renderFavoriteGraph = favoriteAssets.map((element: any) => {
    const currentPrice = element.singleAsset.map((element: any) => element.current_price);
    const changePrice = element.singleAsset.map(
      (element: any) => element.price_change_percentage_24h
    );
    return (
      <Grid item xs={12} sm={6} lg={6} key={element.name}>
        <Grid container className={classes.topCardItem}>
          <Grid item xs={12} sm={6} lg={6}>
            <h3 className={classes.assetName}>{element.name}</h3>
            <div className={classes.itemDetails}>
              <h3 className={classes.cardPrice}>${currentPrice}</h3>
              <Box
                className={
                  changePrice > 0
                    ? `${classes.priceTrend} ${classes.trendUp}`
                    : `${classes.priceTrend} ${classes.trendDown}`
                }
              >
                {changePrice > 0 ? (
                  <img src={TrendUp} alt="TrendUp" />
                ) : (
                  <img src={TrendDown} alt="TrendDown" />
                )}
                <span>{Number(changePrice).toFixed(2)}%</span>
              </Box>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} lg={6}>
            <TestGraph data={element.data} />
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
