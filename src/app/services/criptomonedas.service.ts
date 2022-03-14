import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Criptomonedas } from '../models/criptomonedas';

@Injectable({
  providedIn: 'root',
})
export class CriptomonedasService {
  api =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';
  constructor(private _http: HttpClient) {}

  obtenerCriptos() {
    return this._http.get<Criptomonedas[]>(this.api);
  }
}
