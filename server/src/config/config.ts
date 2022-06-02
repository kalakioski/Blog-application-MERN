const config = {
  mongo: {
    options: {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      socketTimeoutMS: 30000,
      keepAlive: true,
      maxPoolSize: 50,
      autoIndex: false,
      retryWrites: false
    },
    url: `mongodb+srv://kokkja3:5Z7qbeQNX3PFQJF2@cluster0.7kncira.mongodb.net/blog`
  },
  server: {
    host: 'localhost',
    port: 1337
  }
};

export default config;
