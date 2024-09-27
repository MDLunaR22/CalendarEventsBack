import { registerAs } from '@nestjs/config';

export default registerAs('mongo', () => ({
  user: process.env.USER_MONGO,
  password: process.env.PASSWORD,
  access: process.env.ACCESS_KEY,
}));
