import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-tiposgasto',
  templateUrl: './tiposgasto.component.html',
  styleUrls: ['./tiposgasto.component.css']
})
export class TiposgastoComponent implements OnInit {
  tipogastotext: string;
  constructor() { }

  ngOnInit() {
  }

  guardarTipoGasto() {
    console.log(this.tipogastotext);
  }

}
