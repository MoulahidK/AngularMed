import { Component, OnInit } from '@angular/core';
import { filter, map, Observable, tap } from 'rxjs';
import { interval } from 'rxjs/internal/observable/interval';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  interval$! : Observable<string>;

  ngOnInit(): void {
   this.interval$ = interval(1000).pipe(
    filter(value => value % 3 === 0),
    map(value => value % 2 === 0 ?
      `je suis ${value} et je suis par` :
      `je suis ${value} et je suis impair`
      ),
    tap(text => this.logger(text))
    );
    
   
  }
  logger(text: string){
    console.log(`log: ${text}`);
  }
 
}
