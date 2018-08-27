const names = ['aaa', 'bbb', 'ccc']

console.log(names)
for (const index in names) {
    console.log(`index: ${index}`)
    console.log(`value: ${names[index]}`)
    console.log(`typeof(index): ${typeof(index)}`)
    console.log()
}