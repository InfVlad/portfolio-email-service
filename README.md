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

`EMAIL_USER`

`EMAIL_PASS`

`EMAIL_DESTINY`

`EMAIL_SERVICE`

`EMAIL_SENDER`

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
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
