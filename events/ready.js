module.exports = async (client) => {
  console.log(`Fortnight Radio 101.1 is Now Online`);
  await client.user.setActivity("Fortnight Radio 101.1 By Fortnight Supports v1.0", {
    type: "LISTENING",//can be LISTENING, WATCHING, PLAYING, STREAMING
  });
};
