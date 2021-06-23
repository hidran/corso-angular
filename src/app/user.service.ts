import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getUsers() {

    return [
      {
        name: 'Hidran1',
        lastname: 'Arias',
        email: 'hidran@gmail.com',
        fiscalcode: 'RSAHRN72M22Z444S',
        province: 'Torino',
        phone: '454545455',
        age: 43
      },
      {
        name: 'Hidran2',
        lastname: 'Arias',
        email: 'hidran@gmail.com',
        fiscalcode: 'RSAHRN72M22Z444S',
        province: 'Torino',
        phone: '454545455',
        age: 43
      },
      {
        name: 'Hidran3',
        lastname: 'Arias',
        email: 'hidran@gmail.com',
        fiscalcode: 'RSAHRN72M22Z444S',
        province: 'Torino',
        phone: '454545455',
        age: 43
      },
      {
        name: 'Hidran4',
        lastname: 'Arias',
        email: 'hidran@gmail.com',
        fiscalcode: 'RSAHRN72M22Z444S',
        province: 'Torino',
        phone: '454545455',
        age: 43
      }
    ]
  }
}
