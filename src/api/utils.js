// import { AsyncStorage } from 'react-native';

// import store from '../../store';
// import { setUserSession } from '../actions/userSession';
// import { lsTokenKey } from '../constants';

//* ***************** handle the api response object **************************
export function handleApiResponse(response, resetStoreOnUnauthorized: false) {
    return new Promise(async (resolve, reject) => {
        try {
            if (response === null || response === undefined) {
                const error = new Error('API Response Error');
                return reject(error);
            }

            // if fetch request was successful, resolve promise and return the json value
            // check for other status numbers and reject promise with appropriate error message
            if (response.status >= 200 && response.status < 300) {
                const responseJson = await response.json();
                // console.log('handleApiResponse responseJson', responseJson);
                resolve(responseJson.data);
            } else {
                const responseJson = await response.json();
                // console.log('handleApiResponse responseJson for error', responseJson);
                const error = new Error(responseJson.error);
                error.data = responseJson.data;
                // handle specific error response codes
                // 401 = unauthorized access, reset access_token and direct user to login
                // if (!resetStoreOnUnauthorized && response.status === 401) {
                //     await AsyncStorage.removeItem(lsTokenKey);
                //     store.dispatch(setUserSession(null));
                // }

                reject(error);
            }
        } catch (error) {
            reject(error);
        }
    });
} // end of handleApiResponse
