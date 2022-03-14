import { Component, OnInit } from '@angular/core';
import { Criptomonedas } from 'src/app/models/criptomonedas';
import { CriptomonedasService } from 'src/app/services/criptomonedas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  listaCriptomonedas: Criptomonedas[] = [];
  arregloFiltrado:Criptomonedas[]=[]
  buscando!: string;
  constructor(private _criptomonedas: CriptomonedasService) {}

  ngOnInit(): void {
    this.obtenerCriptos();
  }
  obtenerCriptos() {
    this._criptomonedas.obtenerCriptos().subscribe((response) => {
      console.log(response);
      this.listaCriptomonedas = response;
      this.arregloFiltrado=response
    });
  }
  buscar() {
    console.log(this.buscando);
    this.arregloFiltrado = this.listaCriptomonedas.filter((cripto) => 
      cripto.name.toLowerCase().includes(this.buscando.toLowerCase()) ||
        cripto.symbol.toLowerCase().includes(this.buscando.toLowerCase())
    );
  }
}
