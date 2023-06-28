import { WOMENSPROMOTIONS } from '../../app/shared/WOMENSPROMOTIONS';

export const selectFeaturedWomensPromotion = () => {
    return WOMENSPROMOTIONS.find((promotion) => promotion.featured);
};