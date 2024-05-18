import { NextApiRequest } from 'next'
import { sessionOptions } from '@/lib/session';
import { getIronSession } from 'iron-session';
import { User } from '@/interfaces/userFromSystem';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
    const dd = await req.json();
     
    const data = {
        name: "taylor.png",
        status: "done",
        url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        thumbUrl: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        }
    return new Response(JSON.stringify(data), {
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      })

}
