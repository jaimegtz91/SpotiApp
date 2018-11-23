import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }


  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      // 'Authorization': 'Bearer BQAtpZ7leUHzsvopx8Z3tT9UUz9zUxb8bNJ_94aFeh_l_5hqx5jzyiedbVTVWiYpyk9eqBPsJrtvqbPlvs0'
      'Authorization': 'Bearer BQAtpZ7leUHzsvopx83tT9UUz9zUxb8bNJ_94aFeh_l_5hqx5jzyiedbVTVWiYpyk9eqBPsJrtvqbPlvs0'
    });

    return this.http.get(url, {headers});
  }

  getNewReleases() {
    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQDQmHvdCJUCyrT-4_0u51khhPzIT9pINT36V-AJxCJ2VYuy08qNimc1flZgTguIMwTOOk8K9JrtWNMl7EY'
    // });

    // return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
    //           .pipe(map(response => response['albums'].items));

    return this.getQuery('browse/new-releases?limit=20')
              .pipe(map(response => response['albums'].items));
  }

  getArtistas(termino: string) {
    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQBpwkh7lJ6_53eLLm9PtsWduYhcVO-9E0Krsk46993vmlH0ehdjAqDGq9OEbuoeI1wvJ-A1Yi6WzHS-hCI'
    // });

    // return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, { headers })
    //           .pipe(map(response => response['artists'].items));

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
              .pipe(map(response => response['artists'].items));
            }
            
            getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
  }
  
  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
              .pipe(map(response => response['tracks']));
  }

}
