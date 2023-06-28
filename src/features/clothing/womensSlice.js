import {WOMENS} from '../../app/shared/WOMENS';

export const selectAllWomens = () => {
    return WOMENS;
};

export const selectWomenById = (id) => {
    return WOMENS.find((women) => women.id === parseInt(id));
};

export const selectFeaturedWomen = () => {
    return WOMENS.find((women) => women.featured);
}

// export const selectRandomWomen = () => {
//     return WOMEN[Math.floor(WOMEN.length * Math.random())];
// };