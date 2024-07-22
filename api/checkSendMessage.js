// const config = require("../config")
import config from "../config.js"
export default async function checkSendMessage (req, res) {
  console.log('start checkSendMessage');
  const today = new Date();
  const len = config.length
  for (let i = 0; i < len; i++) {
    const item = config[i];
    const dayDate = new Date(item.day)
    console.log(dayDate.getTime());
    console.log(today.getTime());
    if (dayDate.getTime() === today.getTime()) {
      res.status(200).json({
        content: item.message
      })
      return
    }
  }
  res.status(500).json({})
}
