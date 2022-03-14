import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.scss'],
})
export class ConvertidorComponent implements OnInit {
  cantidad: number = 0;
  fiat: string[] = ['USDT', 'MXN'];
  crypto: string[] = ['BTC', 'XRP', 'ADA', 'ETH'];
  tengo: string = 'MXN';
  quiero: string = 'BTC';
  total = 0;
  constructor() {}

  ngOnInit(): void {}
  convertir() {
    switch (this.tengo) {
      case 'MXN':
        if (this.quiero === 'BTC') {
          this.total = this.cantidad * 0.0000013;
        }
        if (this.quiero === 'XRP') {
          this.total = this.cantidad * 0.06099;
        }
        if (this.quiero === 'ADA') {
          this.total = this.cantidad * 0.061;
        }
        if (this.quiero === 'ETH') {
          this.total = this.cantidad * 0.0000189412;
        }
        break;
      case 'USDT':
        if (this.quiero === 'BTC') {
          this.total = this.cantidad * 0.000026;
        }
        if (this.quiero === 'XRP') {
          this.total = this.cantidad * 1.318772;
        }
        if (this.quiero === 'ADA') {
          this.total = this.cantidad * 1.27;
        }
        if (this.quiero === 'ETH') {
          this.total = this.cantidad * 0.0003869;
        }
        break;
    }
  }
}
