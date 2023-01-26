// @ts-check
import { ServerStreamingEventResponse } from '@alerts-streamer-service/grpc_web_client/src/events_pb';
import { EventClient } from '@alerts-streamer-service/grpc_web_client/src/events_grpc_web_pb';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';

const client = new EventClient(`https://ass.coursequery.app/twitch/events`);

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
function configure(config) {
    const PayloadCase = ServerStreamingEventResponse.PayloadCase;

    const metadata = { 'api-key': config.apiKey };
    client.serverStreamingEvent(new Empty(), metadata)
        .on('data', (response) => {
            switch (response.getPayloadCase()) {
                case PayloadCase.USER_FOLLOWED_DATA:
                    const userFollowedData = response.getUserFollowedData();
                    if (!userFollowedData) { return; }

                    config.onUserFollowed?.({
                        userName: userFollowedData.getUserName()
                    });

                    break;
                case PayloadCase.USER_SUBSCRIBED_DATA:
                    const userSubscribedData = response.getUserSubscribedData();
                    if (!userSubscribedData) { return; }
    
                    config.onUserSubscribed?.({
                        userName: userSubscribedData.getUserName(),
                        message: userSubscribedData.getMessage(),
                        durationMonths: userSubscribedData.getDurationMonths()
                    });
                    break;
                case PayloadCase.USER_GIFTED_SUBSCRIPTIONS_DATA:
                    const userGiftedSubscriptionsData = response.getUserGiftedSubscriptionsData();
                    if (!userGiftedSubscriptionsData) { return; }
    
                    config.onUserGiftedSubscriptions?.({
                        userName: userGiftedSubscriptionsData.getUserName(),
                        total: userGiftedSubscriptionsData.getTotal(),
                        tier: userGiftedSubscriptionsData.getTier()
                    });
                    break;
                case PayloadCase.USER_RAIDED_DATA:
                    const userRaidedData = response.getUserRaidedData();
                    if (!userRaidedData) { return; }
    
                    config.onUserRaided?.({
                        raiderName: userRaidedData.getRaiderName(),
                        viewers: userRaidedData.getViewers()
                    });
                    break;
    
            }
        })
        .on('error', (error) => config.onError?.(error));
}

export { configure };