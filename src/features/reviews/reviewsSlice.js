import { MENSREVIEWS } from '../../app/shared/MENSREVIEWS';
import {WOMENSREVIEWS} from '../../app/shared/WOMENSREVIEWS';

export const selectReviewsByMenId = (menId) => {
    return MENSREVIEWS.filter((review) => review.menId === parseInt(menId));
};

export const selectReviewsByWomenId = (womenId) => {
    return WOMENSREVIEWS.filter((review) => review.womenId === parseInt(womenId));
};