const Groq = require("groq-sdk");
const LlamaKey = process.env.LLAMAKEY

const groq = new Groq({ apiKey:  LlamaKey});

module.exports.getGroqChatCompletion = async (req, res) => {
  const { destino, dias } = req.body;

  if (!destino || !dias) {
    return res.status(400).json({ error: "Both 'destino' and 'dias' parameters are required." });
  }

  try {
    const prompt = `Give me a ${dias} itinerary of things to do in ${destino}, including food, sites to visit and good views`;

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      model: "llama3-8b-8192",
    });

    // Send the result back to the client
    res.json({
      content: chatCompletion.choices[0]?.message?.content || "No content available",
    });
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ error: "An error occurred while processing your request." });
  }
};
