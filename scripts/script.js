const a = parseFloat(prompt('Введіть перше число', ' '));
const b = parseFloat(prompt('Введіть друге число', ' '));
const f = parseFloat(prompt('Введіть третє число', ' '));

if (Number.isNaN(a)) {
    alert (`Це не число`)
}
else if (Number.isNaN(b)) {
    alert (`Це не число`)
}
else if (Number.isNaN(f)) {
    alert (`Це не число`)
}
else {
    alert (`Середнє арифметичне значення чисел- ${a}, ${b} та ${f} = ` + Math.round(( a + b + f ) / 3))
}
