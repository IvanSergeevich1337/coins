import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

export interface IPropsLogin<TFieldValues extends FieldValues = FieldValues, TContext = any> {
  navigate: (to: string) => void;
  register: UseFormRegister<TFieldValues | any>;
  errors: FieldErrors<TFieldValues>;
}

export interface IPropsRegister<TFieldValues extends FieldValues = FieldValues, TContext = any> {
  navigate: (value: string) => void;
  register: UseFormRegister<TFieldValues | any>;
  errors: FieldErrors<TFieldValues>;
}

export interface IAuthState {
  user: IPublicUser;
  isAuth: boolean;
}

interface IPublicUser {
  id: number | null,
  firstName: string,
  username: string,
  email: string,
  createdAt: string,
  updatedAt: string
  watchlist:[IWatchlist]
}
interface IWatchlist {
  id: number | null,
  name: string,
  assetId: string,
  createdAt: string,
  updatedAt: string,
  user: number | null
}