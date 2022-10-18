/**
 *
 * @param num 求めたい数字
 * @returns numより小さい素数をまとめた配列
 */
export const eratosthenes = (num: number) => {
  const n = Array.from(Array(num).keys())

  const root_n = num ** 0.5

  for (let i = 2; i < num; i++) {
    if (i > root_n) break

    if (n[i] !== 0) {
      for (let j = n[i] * 2; j < num; j += n[i]) {
        n[j] = 0
      }
    }
  }

  // 0と1を除く
  n.splice(0, 2)

  return n.filter((v) => v !== 0)
}
