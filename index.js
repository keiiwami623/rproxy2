const Fastify = require("fastify");
const server = Fastify();

server.register(require("@fastify/http-proxy"), {
  upstream: "https://job.rikunabi.com/",
  replyOptions: {
    onResponse: (request, reply, res) => {
      reply.removeHeader("X-Frame-Options");
      reply.send(res)
    },
  },
});

server.listen({ port: 8080 });