export abstract class Calculadora {
  static somar(a: number, b: number) {
    return a + b;
  }

  static subtrair(a: number, b: number) {
    return a - b;
  }

  static multiplicar(a: number, b: number) {
    return a * b;
  }

  static dividir(a: number, b: number) {
    return a / b;
  }

  static potencia(a: number, b: number) {
    return Math.pow(a, b);
  }

  static raizQuadrada(a: number) {
    return Math.sqrt(a);
  }

  static modulo(a: number, b: number) {
    return a % b;
  }

  static absoluto(a: number) {
    return Math.abs(a);
  }

  static seno(a: number) {
    return Math.sin(a);
  }

  static cosseno(a: number) {
    return Math.cos(a);
  }

  static tangente(a: number) {
    return Math.tan(a);
  }
}
