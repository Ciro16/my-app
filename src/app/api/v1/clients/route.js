import Client from "@/database/models/client"
import Gender from "@/database/models/gender"

export async function GET() {
  const clients = await Client.findAll({
    // attributes: {
    //   exclude: ['genderId', 'gender_id']
    // },
    // raw: true,
    include: Gender
  })
  return Response.json({hsh: clients[0]})
}

export async function POST(request) {
  const body = await request.json()

  const { gender_id, name, last_name, email } = body

  const newClient = {
    gender_id,
    name,
    last_name,
    email
  }

  try {
    const res = await Client.create(newClient)
    return Response.json({ res })
    
  } catch (error) {
    return Response.json({ error: 'error' })
  }
}