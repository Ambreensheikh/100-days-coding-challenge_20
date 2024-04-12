//generate a hexa decimal color code
let hexaColorCode = `# ${Math.random().toString(16).slice(2 , 8).padEnd(6)}`
console.log(hexaColorCode);