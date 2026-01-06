module.exports = {
  apps: [
    {
      name: "shop-api",
      script: "./dist/server.js",
      watch: true,
      env: {
        PORT: 4000,
        NODE_ENV: "production",
      },
    },
  ],
};
