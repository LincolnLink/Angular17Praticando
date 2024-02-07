import { Component, Input } from "@angular/core";

@Component({
selector: 'filme',
standalone: true,
template: `
    <h4>{{ categoria }}</h4>
`

})
export class FilmeComponent {
    @Input({required: true})
    categoria = '';
}