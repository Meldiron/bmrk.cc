import { PlansType } from 'types/data';

export const plans: PlansType = {
  free: {
    type: 'free',
    name: 'Free',
    limit: {
      bookmarks: 10000,
      tags: 1000,
      favorites: 1000,
      sessions: 0,
      imports: 100,
      share: 100,
    },
    pricing: {
      monthly: 0,
      yearly: 0,
    },
  },
  pro: {
    type: 'pro',
    name: 'Pro',
    limit: {
      bookmarks: 100,
      tags: 100,
      favorites: 100,
      sessions: 0,
      imports: 5,
      share: 10,
    },
    pricing: {
      monthly: 2.49,
      yearly: 24,
    },
  },
};
