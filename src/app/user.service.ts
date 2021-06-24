import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getUsers() {

    return [
      {
        name: 'Hidran1',
        lastname: 'Arias1',
        email: 'hidran@gmail.com',
        fiscalcode: 'RSAHRN72M22Z444S',
        province: 'Torino',
        phone: '454545455',
        age: 43
      },
      {
        name: 'Hidran2',
        lastname: 'Arias2',
        email: 'hidran@gmail.com',
        fiscalcode: 'RSAHRN72M22Z444S',
        province: 'Torino',
        phone: '454545455',
        age: 43
      },
      {
        name: 'Hidran3',
        lastname: 'Arias3',
        email: 'hidran@gmail.com',
        fiscalcode: 'RSAHRN72M22Z444S',
        province: 'Torino',
        phone: '454545455',
        age: 43
      },
      {
        name: 'Hidran4',
        lastname: 'Arias4',
        email: 'hidran@gmail.com',
        fiscalcode: 'RSAHRN72M22Z444S',
        province: 'Torino',
        phone: '454545455',
        age: 43
      }
    ]
  }
}
