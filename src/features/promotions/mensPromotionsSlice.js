import { MENSPROMOTIONS } from '../../app/shared/MENSPROMOTIONS';

export const selectFeaturedMensPromotion = () => {
    return MENSPROMOTIONS.find((promotion) => promotion.featured);
};
