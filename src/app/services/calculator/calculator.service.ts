import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  constructor() {}
  num = '';

  btnClick(i: any, e: any) {
    // console.log(e)

    this.num = this.num + e;
    i.value = this.num;

    // var inp = document.getElementById('inp')?.value()
    // inp = 'anc'
    // console.log(i)
  }
  calculate(e: any) {
    // console.log(e.value)
    this.num = eval(this.num);
    e.value = this.num;
    // console.log(this.num)
    this.num = '';
  }
  clear(e: any) {
    this.num = '';
    e.value = 0;
  }
}
