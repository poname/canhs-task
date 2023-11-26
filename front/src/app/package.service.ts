import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  private baseUrl = 'http://localhost:8080/api/package';

  constructor(private http: HttpClient) { }

  getPackage(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createPackage(id: string, pack: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/client/${id}`, pack);
  }

  updatePackage(id: string, pack: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, pack);
  }

  deletePackage(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getPackagesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getPackagesListOfClient(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/client/${id}`);
  }
}
