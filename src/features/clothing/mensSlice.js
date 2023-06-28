import {MENS} from '../../app/shared/MENS';

export const selectAllMens = () => {
    return MENS;
};

export const selectMenById = (id) => {
    return MENS.find((men) => men.id === parseInt(id));
};

export const selectFeaturedMen = () => {
    return MENS.find((men) => men.featured);
}

// export const selectRandomMen = () => {
//     return MENS[Math.floor(MENS.length * Math.random())];
// };