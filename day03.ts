import {readData} from './utils'

function part1(): number {
  const input = readData(3).join('')
  let sum = 0
  for(const match of input.matchAll(/mul\((\d{1,3}),(\d{1,3})\)/g)) {
    sum += Number.parseInt(match[1]) * Number.parseInt(match[2])
  }

  return sum
}

function part2(): number {
  let input = readData(3).join('')

  while(true) {
    const indexDont = input.indexOf('don\'t()');
    if (indexDont === -1) break
    const indexDo = input.indexOf('do()', indexDont);
    if (indexDo === -1) {
      input = input.slice(0, indexDont)
    } else {
      input = input.slice(0, indexDont) + input.slice(indexDo + 4, input.length)
    }
  }

  let sum = 0
  for(const match of input.matchAll(/mul\((\d{1,3}),(\d{1,3})\)/g)) {
    sum += Number.parseInt(match[1]) * Number.parseInt(match[2])
  }

  return sum
}

console.log(`part1: ${part1()}`)
console.log(`part2: ${part2()}`)
