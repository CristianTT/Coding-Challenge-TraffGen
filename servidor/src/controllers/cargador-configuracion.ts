import * as fs from 'fs';
import { ConfiguracionCupones } from '../models/ConfiguracionCupones';
import * as path from 'path';

export function cargarConfiguracion(): ConfiguracionCupones {
	const datosConfiguracion = fs.readFileSync(path.join(__dirname, '../config/configuracion-cupones-1.json'), 'utf8');
	return JSON.parse(datosConfiguracion).cupones;
}