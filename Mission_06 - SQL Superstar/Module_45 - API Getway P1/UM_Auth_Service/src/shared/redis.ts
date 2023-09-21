/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { SetOptions, createClient } from 'redis';
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

const disconnect = async (): Promise<void> => {
  await redisClient.quit();
  await redisPubClient.quit();
  await redisSubClient.quit();
};

const setAccessToken = async (userId: string, token: string): Promise<void> => {
  const key = `access-token:${userId}`;
  await redisClient.set(key, token, { EX: config.redis_token_expires_in });
};

const set = async (
  key: string,
  value: string,
  options?: SetOptions
): Promise<void> => {
  await redisClient.set(key, value, options);
};

const get = async (key: string): Promise<string | null> => {
  return await redisClient.get(key);
};

const del = async (key: string): Promise<void> => {
  await redisClient.get(key);
};

export const RedisClient = {
  connect,
  disconnect,
  set,
  get,
  del,
  publish: redisPubClient.publish.bind(redisPubClient),
  subscribe: redisSubClient.subscribe.bind(redisSubClient),
};
