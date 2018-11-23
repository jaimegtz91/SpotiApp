import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  // paises: any[] = [];

  // constructor(private http: HttpClient) {
  //   this.http.get('https://restcountries.eu/rest/v2/lang/es')
  //     .subscribe((response: any) => {
  //       this.paises = response;
  //       console.log(response);
  //     });
  //  }

  nuevasCanciones: any[] = [];
  loading: boolean;
  errorMessage = false;
  errorMessageM: string;

  constructor(private spotify: SpotifyService) {
    this.loading = true;
    this.errorMessage = false;

    this.spotify.getNewReleases()
      .subscribe((response: any) => {
        this.nuevasCanciones = response;
        this.loading = false;
      }, (error) => {
        this.loading = false;
        this.errorMessage = true;
        this.errorMessageM = error.error.error.message;
      });
  }


}
