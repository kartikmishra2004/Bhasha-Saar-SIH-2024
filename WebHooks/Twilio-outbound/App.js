const express = require('express');
const twilio = require("twilio");

const app = express()
const port = 3000

app.get('/', (req, res) => {
  const accountSid = 'AC0ff4de8c51022457e0a3fb3a7c785093';
  const authToken = 'f5abf19a1e90ebb6439b85c1ee053496';
  const client = twilio(accountSid, authToken);

  async function createCall() {
    const call = await client.calls.create({
      from: "+17754589833",
      to: "+917879063730",
      twiml: "<Response><Say>Hello, Sanidhya bhai!</Say></Response>",
    });

    console.log(call.sid);
  }

  createCall();

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})