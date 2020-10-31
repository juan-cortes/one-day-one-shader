import * as Day001 from "./001";
import * as Day002 from "./002";

const days = [Day001, Day002];

export function getToday() {
  return days[days.length - 1];
}

export function findDay(n) {
  return days.find((d) => d.n === n);
}
