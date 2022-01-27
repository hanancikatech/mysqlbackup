import { spawn } from "child_process"
import { createWriteStream, WriteStream } from "fs"

const dumpFileName = `${Math.round(Date.now() / 1000)}.dump.sql`

const writeStream = createWriteStream(dumpFileName)

const cred = [
  '-u',
  'root',
  'cikaslotmaster'
]

const runner = () => {
  const mysql = spawn('mysqldump', cred);
  mysql.stdout.pipe<WriteStream>(writeStream).on('finish', () => {
    console.log('berhasil')
  }).on('error', () => {
    console.error("errror")
  })
}


runner()
