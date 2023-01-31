/**
 * @typedef {Object} TwitchConfig
 * @property {string} apiKey
 * @property {UserFollowedCallback=} onUserFollowed
 * @property {UserSubscribedCallback=} onUserSubscribed
 * @property {UserGiftedSubscriptionsCallback=} onUserGiftedSubscriptions
 * @property {UserRaidedCallback=} onUserRaided
 * @property {ErrorCallback=} onError
 */
/**
 * @callback UserFollowedCallback
 * @param {UserFollowedData} data
 */
/**
 * @callback UserSubscribedCallback
 * @param {UserSubscribedData} data
 */
/**
 * @callback UserGiftedSubscriptionsCallback
 * @param {UserGiftedSubscriptionsData} data
 */
/**
 * @callback UserRaidedCallback
 * @param {UserRaidedData} data
 */
/**
 * @callback ErrorCallback
 * @param {Object} error
 */
/**
 * @typedef {Object} UserFollowedData
 * @property {string} userName
 */
/**
 * @typedef {Object} UserSubscribedData
 * @property {string} userName
 * @property {string} message
 * @property {number} durationMonths
 */
/**
 * @typedef {Object} UserGiftedSubscriptionsData
 * @property {string} userName
 * @property {number} total
 * @property {string} tier
 */
/**
 * @typedef {Object} UserRaidedData
 * @property {string} raiderName
 * @property {number} viewers
 */
/**
 *
 * @param {TwitchConfig} config
 */
export function configure(config: TwitchConfig): void;
/**
 *
 * @param {TestConfig} config
 */
export function test(config: TestConfig): void;
export type EventType = number;
export namespace EventType {
    const TWITCH_USER_FOLLOWED: number;
    const TWITCH_USER_SUBSCRIBED: number;
    const TWITCH_USER_GIFTED_SUBSCRIPTIONS: number;
    const TWITCH_USER_RAIDED: number;
}
export type TwitchConfig = {
    apiKey: string;
    onUserFollowed?: UserFollowedCallback | undefined;
    onUserSubscribed?: UserSubscribedCallback | undefined;
    onUserGiftedSubscriptions?: UserGiftedSubscriptionsCallback | undefined;
    onUserRaided?: UserRaidedCallback | undefined;
    onError?: ErrorCallback | undefined;
};
export type UserFollowedCallback = (data: UserFollowedData) => any;
export type UserSubscribedCallback = (data: UserSubscribedData) => any;
export type UserGiftedSubscriptionsCallback = (data: UserGiftedSubscriptionsData) => any;
export type UserRaidedCallback = (data: UserRaidedData) => any;
export type ErrorCallback = (error: any) => any;
export type UserFollowedData = {
    userName: string;
};
export type UserSubscribedData = {
    userName: string;
    message: string;
    durationMonths: number;
};
export type UserGiftedSubscriptionsData = {
    userName: string;
    total: number;
    tier: string;
};
export type UserRaidedData = {
    raiderName: string;
    viewers: number;
};
export type TestConfig = {
    apiKey: string;
    eventType: EventType;
    onError?: ErrorCallback | undefined;
};
//# sourceMappingURL=index.d.mts.map