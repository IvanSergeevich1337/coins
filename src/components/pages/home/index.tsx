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
    console.log('item', item);
    const currentPrice = item.singleAsset.map((item: any) => item.current_price);

    const changePrice = item.singleAsset.map((item: any) => item.price_change_percentage_24h);

    return (
      <Grid item key={item.name} xs={12} sm={6} lg={6}>
        <Grid container className={classes.topCardItem}>
          <Grid item xs={12} sm={6} lg={6}>
            <h3 className={classes.assetName}>{item.name}</h3>
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
                  <img src={TrendUp} alt="up" />
                ) : (
                  <img src={TrendDown} alt="down" />
                )}
                <span>{Number(changePrice).toFixed(2)}%</span>
              </Box>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} lg={6}>
            <TestGraph data={item.data} />
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
