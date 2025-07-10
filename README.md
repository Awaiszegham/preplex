# Perplexity Playwright Agent

This project is a web-automation agent that uses Playwright to interact with Perplexity.ai. It can be used to run prompts and get results, and it can also be used to dispatch results to a webhook.

## Installation

1. Clone the repository.
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and populate it with your Perplexity email and password, and other settings. See `.env.example` for an example.

## Usage

To run a prompt:
```bash
npx perx "your prompt"
```

To run a prompt and send the result to a webhook:
```bash
npx perx "your prompt" --webhook https://your-webhook-url
```