import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { FilmsDetailComponent } from '../films-detail/films-detail.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-films-page',
  templateUrl: './films-page.component.html',
  styleUrls: ['./films-page.component.css']
})
export class FilmsPageComponent implements OnInit {

  public films = [];

  constructor(
    private http: Http,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.loadFilms();
  }

  loadFilms() {
    const headers = new Headers();
     headers.append('Access-Control-Allow-Headers', 'Access-Control-Allow-Origin');
     headers.append('Access-Control-Allow-Origin', 'https://swapi.co/api/films');

    this.http.get(`${environment.serviceUrl}films`, { headers: headers })
      .map(res => res.json())
      .subscribe((dados) => {
        this.films = dados.results;
      },
        (err) => {
        });
  }


  openDialog(response): void {
    const dialogRef = this.dialog.open(FilmsDetailComponent, {
      data: {film: response}
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
