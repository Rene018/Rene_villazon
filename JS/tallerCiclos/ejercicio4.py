operacion = -1
while operacion != 0:
    operacion = int(input('Que operacion desea realizar: \n1. Sumar 2 numeros. \n2. Restar 3 numeros. \n3. Multiplicar 2 numeros. \n4. Dividir 2 numeros. \n0. Salir de la calculadora. \n'))
    if operacion < 0 or operacion > 5:
        print('ingrese un valor valido\n')
    elif operacion == 0:
        print('adios')
    elif operacion == 1:
        numero1 = int(input("ingrese el primer numero: "))
        numero2 = int(input("ingrese el segundo numero: "))
        sumatoria = numero1+numero2
        print('La suma de ', numero1, ' y ', numero2, ' es: ', sumatoria)
    elif operacion == 2:
        numero1 = int(input("ingrese el primer numero: "))
        numero2 = int(input("ingrese el segundo numero: "))
        numero3 = int(input("ingrese el tercer numero: "))
        diferencia = numero1-numero2-numero3
        print('La diferencia entre ', numero1, ', ',
              numero2, 'y ', numero3, ' es: ', diferencia)
    elif operacion == 3:
        numero1 = int(input("ingrese el primer numero: "))
        numero2 = int(input("ingrese el segundo numero: "))
        producto = numero1*numero2
        print('El producto entre ', numero1, ' y ', numero2, ' es: ', producto)
    elif operacion == 4:
        numero1 = int(input("ingrese el primer numero: "))
        numero2 = int(input("ingrese el segundo numero: "))
        if numero2 == 0:
            print('ingrese un valor valido')
        else:
            division = numero1/numero2
            print('La division entre ', numero1,' y ', numero2, ' es: ', division)
