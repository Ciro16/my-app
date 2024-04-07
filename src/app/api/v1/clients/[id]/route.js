import Client from "@/database/models/client"

export async function GET(request, { params }) {
  const { id } = params

  const client = await Client.findByPk(id)
  return Response.json(client)
}

export async function DELETE(request, { params }) {
  const { id } = params

  const client = await Client.findByPk(id)
  return Response.json(client)
}