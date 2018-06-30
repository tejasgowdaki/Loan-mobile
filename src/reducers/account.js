import createReducer from '../lib/createReducer';
import * as types from '../actions/types';
import _ from 'lodash';

export const accounts = createReducer([], {
    [types.SET_ACCOUNTS](state, action) {
        return action.accounts;
    },

    // [types.CREATE_ASSET](state, action) {
    //     let newState = [...state];
    //     newState.push(action.asset);
    //     return newState;
    // },

    // [types.UPDATE_ASSET](state, action) {
    //     let newState = [...state];
    //     newState = newState.map(asset => {
    //         if (asset._id === action.asset._id) {
    //             return action.asset;
    //         }
    //         return asset;
    //     });
    //     return newState;
    // },

    // [types.UPDATE_ASSETS](state, action) {
    //     let newState = [...state];
    //     const oldState = [...state];
    //     action.assets.forEach(asset => {
    //         const assetIndex = oldState.findIndex(w => w._id === asset._id);
    //         assetIndex === -1 ? newState.push(asset) : (newState[assetIndex] = asset);
    //     });
    //     return newState;
    // },

    // [types.DELETE_ASSET](state, action) {
    //     let newState = [...state];
    //     const indexOfAssetToDelete = state.findIndex(asset => {
    //         return asset._id === action.assetId;
    //     });
    //     newState.splice(indexOfAssetToDelete, 1);
    //     return newState;
    // },

    // [types.UPDATE_TRACKERS](state, action) {
    //     let newState = [...state];
    //     action.trackers.forEach(tracker => {
    //         const assetIndex = newState.findIndex(a => a._id === tracker.assetId._id);
    //         if (assetIndex !== -1) {
    //             let newAsset = _.cloneDeep(newState[assetIndex]);
    //             let newTracker = _.cloneDeep(tracker);
    //             newTracker.assetId = newAsset._id;
    //             newAsset.trackerId = newTracker;
    //             newState[assetIndex] = newAsset;
    //         }
    //     });
    //     return newState;
    // }
});
