import {readData} from './utils'

export function part1(): number {
  const input = readData(3).join('')
  let sum = 0
  for (const match of input.matchAll(/mul\((\d{1,3}),(\d{1,3})\)/g)) {
    sum += Number.parseInt(match[1]) * Number.parseInt(match[2])
  }

  return sum
}

export function part2(): number {
  let input = readData(3).join('')

  const regex = /do\(\)|don't\(\)|mul\((\d{1,3}),(\d{1,3})\)/g

  let multiply = 1
  let sum = 0
  let match
  while ((match = regex.exec(input)) !== null) {
    const [pattern, first, second] = match
    if (pattern.startsWith('mul(')) {
      sum += Number.parseInt(first) * Number.parseInt(second) * multiply
    } else if (pattern.startsWith('do(')) {
      multiply = 1
    } else {
      multiply = 0
    }
  }

  return sum
}
