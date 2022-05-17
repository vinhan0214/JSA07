// Câu 1========================================
const equation = (a, b) => {

    return (`Cho phương trình: 0 = ${a}x + ${b} <=> x = ${-b/a}`)
}

console.log(equation(5,8))

// Câu 2========================================
const triangle = (a, b) => {
    let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
    let h = Math.sqrt(Math.pow(a, 2) * Math.pow(b, 2)) / Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
    let box1 = Math.round(Math.asin(b/ c) * 57.2957795)
    let box2 = Math.round(Math.acos(b/ c) * 57.2957795)

    return ({
        'Cạnh huyền': c + ' cm',
        'Đường cao': h + ' cm',
        'Góc trên': box1 + ' độ',
        'Góc dưới': box2 + ' độ'
    })
}

console.log(triangle(3, 4))

