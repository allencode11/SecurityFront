import { Component } from '@angular/core';
import { Cripto, ResponseModel } from '../Models/dataTypes';
import { Lab1Service } from '../services/lab1.service';

@Component({
  selector: 'app-des',
  templateUrl: './des.component.html',
  styleUrls: ['./des.component.scss']
})
export class DesComponent {
  response: boolean = false;
  data: ResponseModel = {data: '', afterInitialPermutation: '', statusCode: 0, leftParts: [], rightParts: []};
  decryptTask: boolean = false;

  getArr = (num: number) => {
    return Array.from(Array(num).keys())
  }
  constructor(private lab1Service: Lab1Service) {}

  onSubmit = (plainText: string, key: string, decrypt: string) => {
    decrypt == 'off' ? this.decryptTask = true : this.decryptTask = false;
    
    const obj: Cripto = { plainText, key };

    this.lab1Service.postEncrypt(obj, this.decryptTask).subscribe((res: ResponseModel) => {
      this.data = res;
      console.log(this.data.data)
      console.log(this.data.leftParts)
      console.log(this.data.rightParts)
      console.log(this.data.afterInitialPermutation)
      console.log(this.data.statusCode)
      this.response = !this.response;

    });
  }

  back = () => {
    this.response = !this.response;
  }

}
