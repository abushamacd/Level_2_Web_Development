import { createClient } from 'redis';
import logger from './logger';
import config from '../config';

let redisClient = createClient({
  url: config.redis_url
});

redisClient.on('error', (err) => logger.error('Redis connection failed', err));
redisClient.on('connect', (err) => logger.info('Redis connection successfully'));

const connect = async (): Promise<void> => {
  await redisClient.connect();
};

export const RedisClient = {
  connect
};
