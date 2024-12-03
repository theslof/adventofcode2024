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

  let multiply = 1
  let sum = 0
  for (const match of input.matchAll(/do\(\)|don't\(\)|mul\((\d{1,3}),(\d{1,3})\)/g)) {
    const [pattern, first, second] = match
    switch (pattern) {
      case 'do()':
        multiply = 1
        break
      case "don't()":
        multiply = 0
        break
      default:
        sum += Number.parseInt(first) * Number.parseInt(second) * multiply
    }
  }

  return sum
}
