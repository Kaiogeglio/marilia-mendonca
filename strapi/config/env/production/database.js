module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        uri: "mongodb+srv://marilia:8tg5gqK5VxFRdB9C@site-overstack.1csp1.mongodb.net/marilia?retryWrites=true&w=majority"
      },
      options: {
        ssl: true,
      },
    },
  },
});
