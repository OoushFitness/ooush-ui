import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  return new Promise<void>((resolve, reject) => {
    req.method;
    fetch('http://localhost:8080/auth/login/pete@ooushfitness.com/Liverpool1')
    .then(response => response.json())
    .then(data => {
      return res.json({...data})
    })
    .catch(error => {
      res.json(error);
      res.status(405).end();
      return resolve();
    })
  })
}
