const { IncomingHttpHeaders } = require('http');
const { NextApiRequest, NextApiResponse } = require('next');
const { WebhookRequiredHeaders } = require('svix');
const { WebhookEvent } = require('@clerk/nextjs/server');
const { Webhook } = require('svix');

const webhookSecret = process.env.WEBHOOK_SECRET;

async function handler(req, res) {
  const payload = JSON.stringify(req.body);
  const headers = req.headers;
  // Create a new Webhook instance with your webhook secret
  console.log("headers", headers)
  const wh = new Webhook(webhookSecret);

  let evt;
  try {
    // Verify the webhook payload and headers
    evt = wh.verify(payload, headers);
  } catch (_) {
    // If the verification fails, return a 400 error
    return res.status(400).json({});
  }
  const { id } = evt.data;

  const eventType = evt.type;
  if (eventType === 'user.created') {
    console.log(`User ${id} was ${eventType}`);
    res.status(201).json({});
  }
}

module.exports = handler;
