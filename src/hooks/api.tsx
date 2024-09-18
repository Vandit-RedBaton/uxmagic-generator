export default async function handler(req : any, res : any) {
    if (req.method === 'POST') {
      const { data } = req.body;
      res.status(200).json({ message: 'Data received successfully', receivedData: data });
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }