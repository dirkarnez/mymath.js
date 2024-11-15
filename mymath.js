export function ln(x) {
  // Math.log is actually ln, but i write the full equation here
  // Math.log(Math.E) is actually 1
  return Math.log(x) / Math.log(Math.E);
}

export  function log(y) {
  // Math.log is ln, so i must precisely set base 10 to make it work as intended log
  return Math.log(y) / Math.LN10; // or Math.log(10)
}

export function log_with_base(y, base) {
  return Math.log(y) / Math.log(base);
}