# Email API with Bun and Hono

This project is an API designed to send emails for my portfolio, built using Bun and the Hono framework. It offers a lightweight and efficient solution for handling email sending operations.

## Features

- **Easy to Use:** Simple API endpoints to send emails.
- **Built with Bun:** Leverages the speed and efficiency of Bun.
- **Framework Support:** Utilizes [Hono](https://hono.dev/), a lightweight and highly performant web framework.
- **Rate Limiter:** Prevents abuse and ensures fair usage by limiting the rate of requests.
- **Input Validation:** Ensures the integrity and validity of the input data before processing.

## Getting Started

### Prerequisites

- Bun: Make sure you have Bun installed on your machine. You can get it from [bun.sh](https://bun.sh).

### Environment variables

To run this project, you will need these environment variables on your .env:

```sh
EMAIL_USER=resend

EMAIL_PASS=somepass

EMAIL_DESTINY=youremail@gmail.com

EMAIL_SERVICE=smtp.resend.com

EMAIL_SENDER=portfolio@yourdomain.com

DEBUG=false

PORT=3001

INTERPRETER="/home/someuser/.bun/bin/bun"

```

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/InfVlad/portfolio-email-service.git
   cd portfolio-email-service
   ```

2. Install dependencies:

   ```sh
   bun install
   ```

3. Start the development server:

   ```sh
   bun run dev
   ```

### Usage

#### Sending an Email

To send an email, make a POST request to the `/send-email` endpoint with the following JSON payload:

```json
{
  "name": "John Smith",
  "email": "recipient@example.com",
  "subject": "Your Subject",
  "message": "Your email message"
}
```

### Deployment

To bundle and minify the app for deployment you can run:

```sh
bun run build
```

#### How to run it as a process in a VPS (Ubuntu)

To achieve this, we need a process manager to handle starting, stopping, and restarting the application. The process manager ensures the application runs continuously, even if the server restarts or the app crashes.

##### Pm2 (Process Manager)

Pm2 is a popular process manager that works well with Node.js and Bun. You check the pm2 docs [here](https://pm2.keymetrics.io/docs/usage/quick-start/)

```sh
# Install npm if not already installed
sudo apt update
sudo apt install -y npm

# Install pm2 globally
sudo npm install -g pm2
```

the current configuration to run this application is:

```js
module.exports = {
  apps: [
    {
      name: "portfolio-mailer", // Name of your application
      script: "./dist/index.js", // Entry point of your application
      interpreter: process.env.INTERPRETER, // Path to the Bun interpreter
      args: ["run"], // Arguments to pass to Bun, e.g., "bun run"
      watch: false, // Optional: Enable file watching for development
      max_memory_restart: ["200M"],
    },
  ],
};
```

Start the application:

```sh
pm2 start pm2.config.js
```

Save the process so it persists after a server reboot:

```sh
pm2 save
```

Enable pm2 to Run on Server Boot:

```sh
pm2 startup
```

It will output a command specific to your system. Run the command it provides

Verify the application is running:

```sh
pm2 status
```

Logs for debugging:

```sh
pm2 logs portfolio-mailer
```

Reload app:

```sh
pm2 reload portfolio-mailer
```

##### Reverse proxy

For this I'm using [Caddy](https://caddyserver.com/docs/), simple and effective.
