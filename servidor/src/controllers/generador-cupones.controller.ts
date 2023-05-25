import { CuponesNumerosSecuenciales } from "../models/algoritmos/CuponesNumerosSecuenciales";
import { CuponesHexadecimal } from "../models/algoritmos/CuponesHexadecimales";
import { CuponesAlfabeticos } from "../models/algoritmos/CuponesAlfabeticos";
import { GeneradorCupones } from '../models/GeneradorCupones';

export class GeneradorCuponesControlador {

  private static instance: GeneradorCuponesControlador;

  private constructor() {}

  static getInstance(): GeneradorCuponesControlador {
    if (!GeneradorCuponesControlador.instance) {
      GeneradorCuponesControlador.instance = new GeneradorCuponesControlador();
    }
    return GeneradorCuponesControlador.instance;
  }

  crearGenerador(algoritmo: string): GeneradorCupones {
    switch (algoritmo) {
      case 'numerosSecuenciales':
        return new CuponesNumerosSecuenciales();
      case 'hexadecimal':
        return new CuponesHexadecimal();
      case 'alfabeticos':
        return new CuponesAlfabeticos();
      default:
        throw new Error(`El algoritmo '${algoritmo}' no está soportado.`);
    }
  }
}