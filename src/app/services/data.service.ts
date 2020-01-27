import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable()
export class DataService {
  users: User[];
  constructor() {
    this.users = [
      {
        firstName: 'Kalash',
        lastName: 'Rastogi',
        age: 21,
        address: {
          place: 'Gandhi Nagar',
          state: 'Delhi'
        },
        image: '../../assets/Kalash.png',
        isActive: true,
        profile: 'Senior Analyst',
        salary: 48000,
        registered: new Date('01/09/2020 8:30:00'),
        hide: true
      },
      {
        firstName: 'Deepanshi',
        lastName: 'Mittal',
        age: 21,
        address: {
          place: 'Ambetha',
          state: 'Uttar Pradesh'
        },
        image: '../../assets/Deeps.png',
        isActive: false,
        profile: 'Senior Analyst',
        salary: 48000,
        registered: new Date('01/09/2020 8:30:00'),
        hide: true
      },
      {
        firstName: 'Aman',
        lastName: 'Arora',
        age: 21,
        address: {
          place: 'Ram Nagar',
          state: 'Uttarakhand'
        },
        image: '../../assets/Aman.png',
        isActive: false,
        profile: 'Senior Analyst',
        salary: 48000,
        registered: new Date('01/09/2020 8:30:00'),
        hide: true
      },
      {
        firstName: 'Kushagr',
        lastName: 'Bansal',
        age: 21,
        address: {
          place: 'Clement Town',
          state: 'Uttarakhand'
        },
        image: '../../assets/Kush.png',
        isActive: false,
        profile: 'Senior Analyst',
        salary: 48000,
        registered: new Date('01/09/2020 8:30:00'),
        hide: true
      }
    ];
  }
  getUsers(): User[]{
    return this.users;
  }
  addUser(user:User){
    this.users.unshift(user);
  }
}
