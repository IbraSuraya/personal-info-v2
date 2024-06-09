export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function capitalizeEachWord(string) {
  return string
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function formatNumber(data) {
  return Intl.NumberFormat("de-DE").format(data);
}
