import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss'],
  standalone: false
})
export class CustomButtonComponent  implements OnInit {

  constructor() { }

  ngOnInit() {} 
  
  @Input() text: string = '';
  @Input() type: 'button' | 'submit' | 'reset' = 'button'; 
  @Input() disabled: boolean = false; // Estado del botón

}
