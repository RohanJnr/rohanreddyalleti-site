import type { APIRoute } from "astro";

export const post: APIRoute = async ({ request }) => {
  const data = await request.formData();

  const name = data.get("name");
  const email = data.get("email");
  const subject = data.get("subject");
  const message = data.get("message");
  // Validate the data - you'll probably want to do more than this
  // console.log(name, email, subject, message)
  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({
        message: "Missing required fields",
      }),
      { status: 400 }
    );
  }
  // Do something with the data, then return a success response

  const discord_webhook_url = "https://discord.com/api/webhooks/1097568415033602181/1KpztUTPcrqGSmz-UoJfK84MGX9vRXl7TgRKoVJA68_3RNnw9deopwByP2lYFO7IN5rw"

  const res = await fetch(discord_webhook_url, {
    method: "post",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(
      {
        "content": `**Name**: ${name}\n**Email**: ${email}\n**__Subject__**:\n${subject}\n**__message__**:\n${message}`,
        "embeds": null,
        "username": "Rohan Site",
        "avatar_url": "https://cdn.pixabay.com/photo/2013/07/13/13/24/snow-160956_960_720.png",
        "attachments": []
      }
    )
  })

  return new Response(
    JSON.stringify({
      message: "Success!"
    }),
    { status: 200 }
  );
};