import { combineReducers } from 'redux';

import * as account from './account';

export default combineReducers(
    Object.assign(
        account
    )
);