import {readFileSync} from 'node:fs'

export function readData(day: number, splitOn: string | RegExp = '\n'): string[] {
  return readFileSync(`./day${day.toFixed().padStart(2, '0')}.data`, {encoding: 'utf8'}).split(splitOn)
}
