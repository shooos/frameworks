import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromUsers from './users.reducer';

export {State, reducer} from './users.reducer';

export const getFeatureState = createFeatureSelector<fromUsers.State>('Users');
export const getSort         = createSelector(getFeatureState, fromUsers.getSort);
export const getUsers        = createSelector(getFeatureState, fromUsers.getUsers);
