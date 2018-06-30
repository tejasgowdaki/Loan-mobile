import { accountsURL } from '../config/api';
import { handleApiResponse } from './utils';

export const getAccounts = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(`${accountsURL}`, {
                method: 'GET'
            });

            const responseJson = await handleApiResponse(response);

            resolve(responseJson);
        } catch (error) {
            reject(error);
        }
    });
};