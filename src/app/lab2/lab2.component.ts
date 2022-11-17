import { Component } from '@angular/core';
import {Cripto, ResponseModel, RsaRequestDataModel, RsaResponseDataModel} from "../Models/dataTypes";
import { Lab2Service } from "../services/lab2.service";

@Component({
  selector: 'app-lab2',
  templateUrl: './lab2.component.html',
  styleUrls: ['./lab2.component.scss']
})
export class Lab2Component {

  response: boolean = false;
  data: number | null = null;
  decryptTask: boolean = false;

  getArr = (num: number) => {
    return Array.from(Array(num).keys())
  }
  constructor(private lab2Service: Lab2Service) {}

  onSubmit = (firstPrim: string, secondPrim: string, message: string, eNumber: string,  decrypt: string) => {
    decrypt == 'off' ? this.decryptTask = true : this.decryptTask = false;

    const obj: RsaRequestDataModel = {
      firstPrim: Number(firstPrim),
      secondPrim: Number(secondPrim),
      message: Number(message),
      eNumber: Number(eNumber)
    };

    this.lab2Service.rsaPost(obj, this.decryptTask).subscribe((res: RsaResponseDataModel) => {
      this.data = res.message;
      this.response = !this.response;

    });
  }

  back = () => {
    this.response = !this.response;
  }

}
