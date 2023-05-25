import { CuponesService } from './../services/cupones.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-cupones',
  templateUrl: './lista-cupones.component.html',
  styleUrls: ['./lista-cupones.component.scss']
})
export class ListaCuponesComponent implements OnInit {

  cupones: string[] = [];

  constructor(private cuponesService: CuponesService) { }

  ngOnInit(): void {
    this.obtenerCupones();
  }

  obtenerCupones(): void {
    this.cuponesService.obtenerCupones().subscribe({
      next: cupones => {
        this.cupones = cupones;
      },
      error: error => {
        console.error('No se han podido obtener los cupones:', error);
      }
    });
  }

}