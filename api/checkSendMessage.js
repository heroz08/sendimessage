// const config = require("../config")
import dayjs from 'dayjs';
import config from "../config.js"
export default async function checkSendMessage (req, res) {
  console.log('start checkSendMessage');
  const today = dayjs().format('YYYY-MM-DD')
  const len = config.length
  for (let i = 0; i < len; i++) {
    const item = config[i];
    const dayDate = dayjs(item.day)
    if (dayDate.isSame(dayjs(today))) {
      res.status(200).json({
        content: item.message
      })
      return
    }
  }
  res.status(500).json({})
}
