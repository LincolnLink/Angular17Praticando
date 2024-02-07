import { Component, Input } from "@angular/core";

@Component({
selector: 'filme2',
standalone: true,
template: `    
    @for(numero of [1,2,3,4]; track $index){
        <p> Filme {{ numero }} de {{ categoria }}</p>
    }
`
})
export class Filme2Component {
    @Input({required: true})
    categoria = '';
}