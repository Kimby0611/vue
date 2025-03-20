const target = "http://127.0.0.1:3000";

module.exports = {
  devServer: {
    port: 8000,
    proxy: {
      "^/api": {
        target,
        changeOrigin: true,
      },
    },
  },
};
