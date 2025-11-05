let randomize = (maxNum = 177, min = 0) => {
    return (Math.floor(Math.random() * maxNum) + min);
}

let generateArray = (elementos = randomize(), min = 0, max = randomize()) => {
    let array = [];
    for (let i = 0; i < elementos; i++) {
        array.push(randomize(max) - min);
    }
    return (array);
}

let printArray = (array) => {
    return ("[" + array.map(element => element).join(", ") + "]");
}

let randomizeArrayOrder = (array) => {
    let rndArray = generateArray(array.length);
    for (let i = 0; i < array.length; i++) {
        if (rndArray[i] < rndArray[i + 1]) {
            let temp = rndArray[i];
            rndArray[i] = rndArray[i + 1];
            rndArray[i + 1] = temp;
            temp = array[i];
            array[i] = array[i + 1];
            array[i + 1] = temp;
        }
    }
    return (array);
}



describe('Ejercicios destructuring', function () {

    describe('Ejercicio 1 - Dado el objeto empleados, extrae la empleada Ana completa en ana', function () {
        it('el objeto empleados está declarado', function () {
            expect(empleados).toEqual([
                { name: "Luis", email: "Luis@gmail.com" },
                { name: "Ana", email: "Ana@gmail.com" },
                { name: "Andrea", email: "Andrea@gmail.com" },
            ])
        })
        it('la variable ana tiene el valor correcto', function () {
            expect(ana).toEqual({ name: 'Ana', email: 'Ana@gmail.com' })
        })
    })
    describe('Ejercicio 2 - Dado el objeto empleados, extrae el email de luis en la variable emailLuis', function () {
        it('el objeto empleados está declarado', function () {
            expect(empleados).toEqual([
                { name: "Luis", email: "Luis@gmail.com" },
                { name: "Ana", email: "Ana@gmail.com" },
                { name: "Andrea", email: "Andrea@gmail.com" },
            ])
        })
        it('la variable emailLuis tiene el valor correcto', function () {
            expect(emailLuis).toEqual("Luis@gmail.com")
        })
    })
    describe('Ejecicio 3 - Dadas las variables a y b intercambia sus valores', function () {

        it('la variable a tiene el valor correcto', function () {
            expect(a).toEqual(3);
        })
        it('la variable b tiene el valor correcto', function () {
            expect(b).toEqual(5);
        })
    })

    describe('Ejecicio 4 - Dado el objeto HIGH_TEMPERATURES cambiar las siguientes líneas para guardar mediante destructuración los valores de temperaturas en las variables maximaHoy y maximaManana', function () {
        it('El objeto HIGH_TEMPERATURES está declarado', function () {
            expect(HIGH_TEMPERATURES).toEqual({
                yesterday: 30,
                today: 35,
                tomorrow: 32,
            })
        })

        it('la variable maximaHoy tiene el valor correcto', function () {
            expect(maximaHoy).toEqual(35)
        })
        it('la variable maximaManana tiene el valor correcto', function () {
            expect(maximaManana).toEqual(32);
        })
    })

})

describe('Ejercicios spread operator', function () {
    describe('Ejercicio 5 - Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los demás argumentos.', function () {
        it('sumEveryOther(1,2,3,4,5) es igual a 15', function () {
            expect(sumEveryOther(1, 2, 3, 4, 5)).toEqual(15);
        })
        it('sumEveryOther(1,2,3) es igual a 6', function () {
            expect(sumEveryOther(1, 2, 3)).toEqual(6);
        })
        it('sumEveryOther(1,1,1,1,1,1,1) es igual a 7', function () {
            expect(sumEveryOther(1, 1, 1, 1, 1, 1, 1)).toEqual(7);
        })
    })
    describe('Ejercicio 6 - Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings y retorne la suma solo de los números)', function () {
        it('addOnlyNums(1,"perro", 6, "gato", "ratón", 7) to equal 14', function () {
            expect(addOnlyNums(1, "perro", 6, "gato", "ratón", 7)).toBe(14)
        })
        it('addOnlyNums(1, "perro", 6, "gato", 2, "ratón", 7, 3, "vaca", "gallina") to equal 14', function () {
            expect(addOnlyNums(6, "gato", 2, "ratón", 7, 3, "vaca", 1, "perro", "gallina")).toBe(19)
        })
    })

    describe('Ejercicio 7 - Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.', function () {
        it('countTheArgs(1,"perro", 6, "gato", "ratón", 7) to equal 6', function () {
            expect(countTheArgs(1, "perro", 6, "gato", "ratón", 7)).toBe(6)
        })
        it('countTheArgs(1, "perro", 6, "gato", 2, "ratón", 7, 3, "vaca", "gallina") to equal 10', function () {
            expect(countTheArgs(6, "gato", 2, "ratón", 7, 3, "vaca", 1, "perro", "gallina")).toBe(10)
        })
    })
    describe('Ejercicio 8 - Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).', function () {
        it('combineTwoArrays([1, 2, 3], [4, 5, 6]) devuelve [1, 2, 3, 4, 5, 6]', function () {
            expect(combineTwoArrays([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6])
        })
        it('combineTwoArrays([1, 2], [3, 4, 5, 6]) devuelve [1, 2, 3, 4, 5, 6]', function () {
            expect(combineTwoArrays([1, 2], [3, 4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6])
        })
        it('combineTwoArrays([1], [2, 3, 4, 5, 6])) devuelve [1, 2, 3, 4, 5, 6]', function () {
            expect(combineTwoArrays([1], [2, 3, 4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6])
        })

    })
    describe('Ejercicio 9 - Escriba una función llamada onlyUniques que acepte cualquier número de argumentos y devuelva un array de elementos únicos, sin repetidos.', function () {
        it(`onlyUniques("gato", "pollo", "cerdo", "cerdo") devuelve ['gato', 'pollo', 'cerdo']`, function () {
            expect(onlyUniques("gato", "pollo", "cerdo", "cerdo")).toEqual(['gato', 'pollo', 'cerdo'])
        })
        it(`onlyUniques(1, 1, 2, 2, 3, 6, 7, 8) devuelve [1, 2, 3, 6, 7, 8]`, function () {
            expect(onlyUniques(1, 1, 2, 2, 3, 6, 7, 8)).toEqual([1, 2, 3, 6, 7, 8])
        })
    })
    describe('Ejercicio 10 - Escriba una función llamada combineAllArrays que pueda recibir cualquier cantidad de arrays como argumentos y los combine todos en un solo array..', function () {
        it(`combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1]) devuelve [3, 6, 7, 8, 2, 7, 3, 1]`, function () {
            expect(combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1])).toEqual([3, 6, 7, 8, 2, 7, 3, 1])
        })
        it(`combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12]) devuelve [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]`, function () {
            expect(combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1])).toEqual([2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1])
        })
    })
    describe('Ejercicio 11 - Escriba una función llamada sumAndSquare que reciba cualquier número de argumentos, los eleve al cuadrado y devuelva la suma de todos los valores cuadrados.', function () {
        it('sumAndSquare(1,2,3,4,5,6) devuelve 91', function () {
            expect(sumAndSquare(1, 2, 3, 4, 5, 6)).toEqual(91);
        })
        it('sumAndSquare(1,2,3,5) devuelve 39', function () {
            expect(sumAndSquare(5, 10)).toEqual(125);
        })

    })
})