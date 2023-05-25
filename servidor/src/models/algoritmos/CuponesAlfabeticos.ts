import { GeneradorCupones } from '../GeneradorCupones';

export class CuponesAlfabeticos implements GeneradorCupones {

	generar(cantidad: number): string[] {
		const cupones: string[] = [];
		for (let i = 1; i <= cantidad; i++) {
			const cupon = this.convertirNumeroALetra(i - 1).padStart(5, '0');
			cupones.push(cupon);
		}
		return cupones;
	}

	private convertirNumeroALetra(numero: number): string {
		const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		let resultado = '';
		do {
			const indice = numero % letras.length;
			resultado = letras[indice] + resultado;
			numero = Math.floor(numero / letras.length) - 1;
		} while (numero >= 0);
		return resultado;
	}
}