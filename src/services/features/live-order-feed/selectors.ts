import { RootState } from '../../app/store';

export const getLiveOrderFeedData = (state: RootState) =>
    state.liveOrderFeed.orders;
