import {WOMEN} from '../../app/shared/WOMEN';

export const selectAllWomen = () => {
    return WOMEN;
};

export const selectRandomMen = () => {
    return WOMEN[Math.floor(WOMEN.length * Math.random())];
};