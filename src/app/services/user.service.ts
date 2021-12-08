import { Injectable } from '@angular/core';
import { User } from '../classes/User';
import { UserInterface } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [
    {
      id: 1,
      name: 'Hidran1',
      lastname: 'Arias1',
      email: 'hidran@gmail.com',
      fiscalcode: 'RSAHRN72M22Z444S',
      province: 'Torino',
      phone: '454545455',
      age: 43
    },
    {
      id: 2,
      name: 'Hidran2',
      lastname: 'Arias2',
      email: 'hidran@gmail.com',
      fiscalcode: 'RSAHRN72M22Z444S',
      province: 'Torino',
      phone: '454545455',
      age: 43
    },
    {
      id: 3,
      name: 'Hidran3',
      lastname: 'Arias3',
      email: 'hidran@gmail.com',
      fiscalcode: 'RSAHRN72M22Z444S',
      province: 'Torino',
      phone: '454545455',
      age: 43
    },
    {
      id: 4,
      name: 'Hidran4',
      lastname: 'Arias4',
      email: 'hidran@gmail.com',
      fiscalcode: 'RSAHRN72M22Z444S',
      province: 'Torino',
      phone: '454545455',
      age: 43
    }
  ];

  getUsers() {

    return this.users;
  }
  deleteUser(user: User) {

    const index = this.users.indexOf(user);
    if (index > -1) {
      this.users.splice(index, 1);
    }
  }
  updateUser(user: UserInterface) {
    const idx = this.users.findIndex(v => v.id === user.id);

    if (idx !== -1) {
      this.users[idx] = { ...user };
    }
  }
  createUser(user: UserInterface) {

    this.users.splice(0, 0, { ...user });

  }
}
