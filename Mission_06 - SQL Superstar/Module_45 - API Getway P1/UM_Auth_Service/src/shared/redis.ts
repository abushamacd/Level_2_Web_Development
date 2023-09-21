/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { createClient } from 'redis';
import { logger } from './logger';
import config from '../config';

const redisClient = createClient({
  url: config.redis_url,
});

const redisPubClient = createClient({
  url: config.redis_url,
});

const redisSubClient = createClient({
  url: config.redis_url,
});

redisClient.on('error', err => logger.error('Redis connection failed', err));
redisClient.on('connect', err => logger.info('Redis connection successfully'));

const connect = async (): Promise<void> => {
  await redisClient.connect();
  await redisPubClient.connect();
  await redisSubClient.connect();
};

export const RedisClient = {
  connect,
  publish: redisPubClient.publish.bind(redisPubClient),
  subscribe: redisSubClient.subscribe.bind(redisSubClient),
};
