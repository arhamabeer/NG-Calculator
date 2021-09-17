import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';

  btnClick(e:number) {
    console.log(e)
  }
  calculate(){
    let inp = document.getElementById('inp')
    console.log(inp.native)
  }


}
