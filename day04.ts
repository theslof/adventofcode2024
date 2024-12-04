import {readData} from './utils'

export function part1(): number {
  const input = readData(4)

  const rot90: string[] = []

  for (let col = 0; col < input.length; col++) {
    const line: string[] = []
    for (let row = 0; row < input.length; row++) {
      line.push(input[row].charAt(col))
    }
    rot90.push(line.join(''))
  }

  const rot45: string[] = []

  for (let col = input.length + input.length / 2; col >= -input.length / 2; col--) {
    const line: string[] = []
    for (let row = 0; row < input.length * 2; row++) {
      const y = row
      const x = col - row + input.length / 2
      const c = input[y]?.charAt(x)
      if (c) line.push(c)
    }
    rot45.push(line.join(''))
  }

  const rotNeg45: string[] = []

  for (let col = input.length + input.length / 2; col >= -input.length / 2; col--) {
    const line: string[] = []
    for (let row = input.length * 2; row >= 0; row--) {
      const y = row - input.length / 2
      const x = col + row - input.length
      const c = input[y]?.charAt(x)
      if (c) line.push(c)
    }
    rotNeg45.push(line.join(''))
  }

  let sum = 0
  for(const line of input) {
    sum += Array.from(line.matchAll(/XMAS/g)).length + Array.from(line.matchAll(/SAMX/g)).length
  }
  for(const line of rot90) {
    sum += Array.from(line.matchAll(/XMAS/g)).length + Array.from(line.matchAll(/SAMX/g)).length
  }
  for(const line of rot45) {
    sum += Array.from(line.matchAll(/XMAS/g)).length + Array.from(line.matchAll(/SAMX/g)).length
  }
  for(const line of rotNeg45) {
    sum += Array.from(line.matchAll(/XMAS/g)).length + Array.from(line.matchAll(/SAMX/g)).length
  }

  return sum
}

export function part2(): number {
  let input = readData(4).map(line => line.split(''))

  let sum = 0

  for (let row = 1; row < input.length - 1; row++) {
    for (let col = 1; col < input.length - 1; col++) {
      if (input[row][col] === 'A') {
        if (input[row - 1][col - 1] === 'M') {
          if (input[row + 1][col + 1] !== 'S') {
            continue
          }
        } else if (input[row - 1][col - 1] === 'S') {
          if (input[row + 1][col + 1] !== 'M') {
            continue
          }
        } else {
          continue;
        }

        if (input[row + 1][col - 1] === 'M') {
          if (input[row - 1][col + 1] !== 'S') {
            continue
          }
        } else if (input[row + 1][col - 1] === 'S') {
          if (input[row - 1][col + 1] !== 'M') {
            continue
          }
        } else {
          continue;
        }

        sum++
      }
    }
  }

  return sum
}
