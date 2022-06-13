import { Component, Input, OnInit } from '@angular/core';
import { of, from } from 'rxjs';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent implements OnInit {
  @Input() name: string;

  ngOnInit() {
    of(2, 4, 6, 8).subscribe((item) => {
      console.log(item);
    });

    from([3, 5, 7, 9]).subscribe((item) => {
      console.log(item);
    });
  }
}
