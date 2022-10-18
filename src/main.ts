import { eratosthenes } from './eratosthenes'

const main = () => {
  console.log('Hello World!')
}

const willFail = (name: string) => {
  console.log(`Hello ${name}!`)
}

main()
const result = eratosthenes(100)
console.log(result)
console.log('素数の個数: ', result.length)
// willFail(100)
