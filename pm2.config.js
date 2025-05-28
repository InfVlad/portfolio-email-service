module.exports = {
  apps: [
    {
      name: "portfolio-mailer",
      script: "./dist/index.js",
      interpreter: process.env.INTERPRETER,
      args: ["run"],
      watch: false,
      max_memory_restart: ["200M"],
    },
  ],
};
