import { Component } from '@angular/core';
import { RandomService } from '../random.service';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
 
 
  input:string = '';
  result:string = '';
  brackets:boolean = false; 
  
  constructor(public randomService: RandomService) {}
 
  pressNum(num: string) {
    this.checkError();
    if (num=="0") {
      if (this.input=="" ) {
        return;
      }
    }
    this.brackets = true;
    this.input = this.input + num
  }
  
  pressBrackets(){
    this.checkError();
    if (this.brackets){
      this.input = this.input + ')' 
    }else{
      this.input = this.input + '('
    }
  }
 
  pressOperator(op: string) {
    this.checkError();
    this.brackets = false;
    this.input = this.input + op
  }
 
  getRandom() {
    this.checkError();
    this.randomService.getRandom().subscribe((data: number) => {
      this.input = this.input + data;
    });
  }
 
  clear() {
    this.input = '';
  }
 
  getAnswer() {
    try {
      this.input = eval(this.input.replace('sin(', 'Math.sin(').replace('cos(', 'Math.cos(').replace('tan(', 'Math.tan(')); 
    } catch (e) {
      this.input = 'Syntax Error';
      throw e  
    }
  }
  checkError(){
    if(this.input === 'Syntax Error'){
      this.input = '';
    }
  }
}