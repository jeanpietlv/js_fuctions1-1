function intro() {
    var a = 1 + 3
    console.log('Hello World!')
    console.log('1+3 = ' + (a))
}

intro()

function intro2(paramName) {
    var varName = 'SuperCoder'
    console.log('Hi, ' + (varName) + ' Mein Name ist ' + (paramName) + ' .')
}

intro2('Patrick')

function intro3(name, stadt, alter) {
    console.log('Hallo, mein Name ist ' + (name) + 'ich bin ' + (alter) + 'Jahre alt. Ich komme aus ' + (stadt) + '.')
}

intro3('Patrick', 'Hamburg', 29)

function math(num1, num2) {
    console.log(num1 * num2)
    console.log(num1 / num2)
}

math(10, 2)
math(30, 20)
math(5, 0)
math(45, 173)
math(1, 1000)
