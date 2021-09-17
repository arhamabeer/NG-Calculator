import { Component } from '@angular/core';
import { CalculatorService } from './services/calculator/calculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'calculator';
  num = '';

  constructor(private calser: CalculatorService) {}

  btnClick(i: any, e: any) {
    this.calser.btnClick(i, e);
  }
  calculate(e: any) {
    this.calser.calculate(e);
  }
  clear(i: any) {
    this.calser.clear(i);
  }




  
  // btnClick(i:any, e:any) {
  //   // console.log(e)

  //   this.num = this.num + e
  //   i.value = this.num

  //   // var inp = document.getElementById('inp')?.value()
  //   // inp = 'anc'
  //   // console.log(i)
  // }
  // calculate(e: any){
  //   // console.log(e.value)
  //   this.num = eval(this.num)
  //   e.value = this.num
  //   // console.log(this.num)
  //   this.num= ''
  // }
  // clear(e:any){
  //   this.num = ""
  //   e.value = 0
  // }
}
