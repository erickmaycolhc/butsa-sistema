import { NextApiRequest } from 'next'
import { sessionOptions } from '@/lib/session';
import { getIronSession } from 'iron-session';
import { User } from '@/interfaces/userFromSystem';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
    //const { email, password } = req.json();
    const dd = await req.json();
     
    // console.log("sss 3 ==> ", await req.body.password)
    const user = { 
        user_id: "1",
        email: "taylor@gmail.com",
        first_name: "Taylor",
        last_name: "Alisson",
        father_last_name: "Swift",
        mother_last_name: "gg",
        phone: "987654321",
        avatar: "",
        group: [
            {
                permission_id: "1",
                permission: "AAAAA"
            }
        ],
        rol: 'ADMIN'
    } as User

    // const res = new  Response(JSON.stringify(user), {
    //     status: 200,
    //     headers: { "Content-Type": "application/json" },
    //   });
    // //const res = new Response(JSON.stringify(user))

    // const session = await getIronSession(req, res, sessionOptions);
    // console.log("before ", session, session.user === undefined)
    
    // if (session.user === undefined) {
    //     console.log("set user")
        
    //     session.user = user
    //     await session.save()
    // }
    // console.log("after ", session)

    console.log("api user ==> ", user)
    return new Response(JSON.stringify(user), {
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      })

}

// function getTokenData(token: string): User {
//     const decoded = jwt.verify(token, process.env.TOKEN_SECRET, {
//       algorithms: ['HS256']
//     });
//     return decoded;
//   }