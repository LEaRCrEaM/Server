module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const { message } = req.body;

    if (message) {
      const messages = [];
      messages.push(message);
      res.status(200).json({ success: true, message: 'Message added successfully' });
    } else {
      res.status(400).json({ success: false, message: 'Invalid message' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method not allowed' });
  }
};
