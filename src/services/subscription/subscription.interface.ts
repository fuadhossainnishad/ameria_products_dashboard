export interface ISubscription {
  _id: string;
  subscriptionName: string;
  billingCycle: string;
  shortDescription: string[];
  price: number;
  createdAt: Date;
  updatedAt: Date;
}
export type TSubscription = Partial<ISubscription>;

export type TSubscriptionUpdate = Partial<ISubscription> & {
  subscriptionId: string;
};

export enum TBillingCycle {
  FREE = "free",
  MONTHLY = "monthly",
  YEARLY = "yearly",
}
