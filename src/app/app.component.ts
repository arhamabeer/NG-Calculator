import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';
  num = ''
  constructor(){}
  btnClick(i:any, e:any) {
    // console.log(e)

    this.num = this.num + e
    i.value = this.num

    // var inp = document.getElementById('inp')?.value()
    // inp = 'anc'
    // console.log(i)
  }
  calculate(e: any){
    // console.log(e.value)
    this.num = eval(this.num)
    e.value = this.num
    // console.log(this.num)
    this.num= ''
  }
  clear(e:any){
    this.num = ""
    e.value = 0
  }

}
