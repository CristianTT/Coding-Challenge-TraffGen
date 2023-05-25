import { GeneradorCupones } from '../GeneradorCupones';

export class CuponesNumerosSecuenciales implements GeneradorCupones {
	generar(cantidad: number): string[] {
		const cupones: string[] = [];
		for (let i = 1; i <= cantidad; i++) {
			const cupon = i.toString().padStart(6, '0');
			cupones.push(cupon);
		}
		return cupones;
	}
}