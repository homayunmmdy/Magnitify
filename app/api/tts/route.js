import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { title, body } = req.body;

    try {
      // Replace with your OpenAI API key and endpoint
      const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
      const response = await axios.post(
        'https://api.openai.com/v1/engines/davinci-codex/completions',
        {
          prompt: `${title}\n\n${body}`,
          max_tokens: 1000,
          n: 1,
          stop: null,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
          },
        }
      );

      const audioUrl = response.data.audioUrl; // Replace with actual response handling to get the TTS audio URL
      res.status(200).json({ audioUrl });
    } catch (error) {
      console.error('Error with OpenAI API:', error);
      res.status(500).json({ error: 'Failed to generate TTS' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}