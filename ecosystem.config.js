const config = {
  apps: [
    {
      name: "shop-api",
      script: "./dist/server.js",
      watch: true,
      env_production: {
        NODE_ENV: "production",
      },
      env_development: {
        NODE_ENV: "development",
      },
    },
  ],
};

export default config;
