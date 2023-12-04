import { shallow } from 'zustand/shallow';
import { Bid } from '@/types';
import { createWithEqualityFn } from 'zustand/traditional';

type State = {
  auctionId: string | null;
  bids: Bid[];
  open: boolean;
};

type Actions = {
  setBids: (auctionId: string, bids: Bid[]) => void;
  addBid: (bid: Bid) => void;
  setOpen: (value: boolean) => void;
};

export const useBidStore = createWithEqualityFn<State & Actions>((set) => ({
  auctionId: null,
  bids: [],
  open: true,
  setBids: (auctionId: string, bids: Bid[]) => {
    set(() => ({
      auctionId,
      bids,
    }));
  },
  addBid: (bid: Bid) => {
    set((state) => {
      if (state.auctionId && bid.auctionId === state.auctionId) {
        return {
          bids: !state.bids.find((x) => x.id === bid.id)
            ? [bid, ...state.bids]
            : [...state.bids],
        };
      }
      return state;
    });
  },
  setOpen: (value: boolean) => {
    set(() => ({
      open: value,
    }));
  },
  shallow,
}));
