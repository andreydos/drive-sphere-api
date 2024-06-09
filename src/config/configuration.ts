export default () => ({
  environment: process.env.NODE_ENV || 'development',
  IS_DEV: process.env.NODE_ENV === 'development',

  // DB settings
  DB_HOST: process.env.DB_HOST || 'localhost',
  DB_PORT: process.env.DB_PORT || 5432,
  DB_PASSWORD: process.env.DB_PASSWORD || 'drive',
  DB_USERNAME: process.env.DB_USERNAME || 'drive',
  DB_DATABASE: process.env.DB_DATABASE || 'drive',
});
