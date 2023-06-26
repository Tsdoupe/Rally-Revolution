import {MENS} from '../../app/shared/MENS';

export const selectAllMens = () => {
    return MENS;
};

export const selectRandomMen = () => {
    return MENS[Math.floor(MENS.length * Math.random())];
};