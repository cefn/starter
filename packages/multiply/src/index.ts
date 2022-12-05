import { sum } from "@starter/sum";

export function multiply(a: number, b: number) {
  let total = 0;
  for (let i = 0; i < a; i++) {
    total = sum(total, b);
  }
  return total;
}
