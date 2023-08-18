import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BASE_URL } from '../configs/base-url.config';
import { BehaviorSubject, Observable, take } from 'rxjs';

import { APIResponse, CarModel, CarModelData, CarVariantData } from '@data-models';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private _models$ = new BehaviorSubject<CarModel[] | []>([]);

  constructor(
    @Inject(BASE_URL)private  baseUrl: string,
    private http: HttpClient
  ) {
    this.getAllModels();
  }

  getAllCars(payload = {}): Observable<CarVariantData> {
    const url = `${this.url}/variants`;
    return this.http.post<CarVariantData>(url, payload);
  }

  getAllModels() {
    const url = `${this.url}/models`;
    this.http.get<CarModelData>(url).pipe(
      take(1)
    ).subscribe(res => {
      this._models$.next(res.data);
    });
  }

  getModel(payload: { modelId: string }) {
    const url = `${this.url}/model`;
    return this.http.post<APIResponse<CarModel>>(url, payload);
  }

  get models$() {
    return this._models$.asObservable();
  } 
  private get url(): string {
    return `${this.baseUrl}/cars`;
  }
}
