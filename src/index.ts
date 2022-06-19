import { log } from 'console'

const Box = require('cli-box')

const { APP_NAME, APP_VERSION, APP_AUTHOR } = process.env
const BANNER = `
    ▸ Version   :   ${APP_VERSION}
    ▸ Name      :   ${APP_NAME}
    ▸ Author    :   ${APP_AUTHOR}
`

const myBox = new Box(
  {
    w: 50,
    h: 5,
    stringify: false,
    marks: {
      nw: '╭',
      n: '─',
      ne: '╮',
      e: '│',
      se: '╯',
      s: '─',
      sw: '╰',
      w: '│',
    },
    hAlign: 'left',
  },
  BANNER
)

log(myBox.stringify())
