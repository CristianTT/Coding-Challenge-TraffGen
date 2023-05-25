import { Request, Response } from 'express';
import { cargarConfiguracion } from '../controllers/cargador-configuracion';
import { GeneradorCuponesControlador } from '../controllers/generador-cupones.controller';

export function rutasCupones(app: any): void {
    app.get('/cupones', (req: Request, res: Response) => {
        const config = cargarConfiguracion();
        const controlador = GeneradorCuponesControlador.getInstance();
        const generador = controlador.crearGenerador(config.algoritmo);
        const cupones = generador.generar(config.cantidad);
        res.json(cupones);
    });
}