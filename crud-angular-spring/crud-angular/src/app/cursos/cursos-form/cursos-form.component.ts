import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cursos-form',
  standalone: true,
  imports: [],
  templateUrl: './cursos-form.component.html',
  styleUrl: './cursos-form.component.css'
})
export class CursosFormComponent {

  constructor(
    private route: ActivatedRoute
  ){}

  ngOnInit(): void{
    const curso = this.route.snapshot.data['curso'];
  }

  

}
