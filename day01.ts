import {readData} from './utils'

function part1(): number {
  const {l: leftCol, r: rightCol} = readData(1).reduce((acc, line) => {
    const [, left, right] = line.match(/(\d+)\s+(\d+)/) ?? []
    acc.l.push(Number.parseInt(left))
    acc.r.push(Number.parseInt(right))
    return acc
  }, {l: [] as number[], r: [] as number[]})

  leftCol.sort()
  rightCol.sort()

  let sum = 0

  for (let i = 0; i < leftCol.length; i++) {
    sum += Math.abs(leftCol[i] - rightCol[i])
  }

  return sum
}

function part2(): number {
  const {location_ids, occurrences} = readData(1).reduce((acc, line) => {
    const [, left, right] = line.match(/(\d+)\s+(\d+)/) ?? []
    acc.location_ids.push(Number.parseInt(left))
    const r = Number.parseInt(right)
    if (acc.occurrences[r] == null) {
      acc.occurrences[r] = 0
    }
    acc.occurrences[r] += 1
    return acc
  }, {location_ids: [] as number[], occurrences: {} as Record<number, number>})

  location_ids.sort()

  let sum = 0
  for (let i = 0; i < location_ids.length; i++) {
    const location_id = location_ids[i]
    sum += location_id * (occurrences[location_id] ?? 0)
  }
  return sum
}

console.log(`part1: ${part1()}`)
console.log(`part2: ${part2()}`)
