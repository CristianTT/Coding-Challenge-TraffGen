import { GeneradorCupones } from '../GeneradorCupones';

export class CuponesHexadecimal implements GeneradorCupones {
	generar(cantidad: number): string[] {
		const cupones: string[] = [];
		for (let i = 1; i <= cantidad; i++) {
			const cupon = i.toString(16).padStart(4, '0');
			cupones.push(cupon);
		}
		return cupones;
	}
}