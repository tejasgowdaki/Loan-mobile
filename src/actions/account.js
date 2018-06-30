import * as types from './types';
import { getAccounts } from '../api/account';

export const setAccounts = accounts => {
    return {
        type: types.SET_ACCOUNTS,
        accounts
    };
};

// export const createAssetStore = asset => {
//     return {
//         type: types.CREATE_ASSET,
//         asset
//     };
// };

// export const updateAssetStore = asset => {
//     return {
//         type: types.UPDATE_ASSET,
//         asset
//     };
// };

// export const updateAssetsStore = assets => {
//     return {
//         type: types.UPDATE_ASSETS,
//         assets
//     };
// };

// export const deleteAssetStore = assetId => {
//     return {
//         type: types.DELETE_ASSET,
//         assetId
//     };
// };

export const fetchAccounts = () => {
    return async dispatch => {
        try {
            const accountResponse = await getAccounts();
            console.log('accountResponse', accountResponse)
            dispatch(setAccounts(accountResponse));
        } catch (error) {
            console.log(error);
        }
    };
};
