import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { of } from 'rxjs';
import { FilmeComponent } from './filme/filme.component';
import { Filme2Component } from "./filme/filme.component2";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, FilmeComponent, Filme2Component]
})
export class AppComponent {
  title = 'angular-17';

  ehVerdadeira = true;

  status = 'admin';

  filmes =[
    'Ação',
    'Terror',
    'Suspense',
    'Comédia'
  ];

  /* Gera um observable de filmes */
  filmes$ = of(this.filmes);

}
