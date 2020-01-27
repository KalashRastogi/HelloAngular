import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../models/User';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    age: null,
    address:{
      place:'',
      state:''
    },
    profile: '',
    salary: null,
    image: '',
    registered: null,
    isActive: false,
    hide: true
  }
  users: User[];
  showExtended: boolean = false;
  loaded: boolean = true; //while doing http requests some time it takes time to load the data
  enableAdd: boolean = false;
  currentClasses = { };
  currentStyles = { };
  showUserForm: boolean = false;
  @ViewChild ('userForm',{static: false}) form: any;
  constructor(private dataService: DataService) { }

  ngOnInit() {

    // setTimeout( () => {
    //   this.users = [
    //     {
    //       firstName: 'Kalash',
    //       lastName: 'Rastogi',
    //       age: 21,
    //       address: {
    //         place: 'Gandhi Nagar',
    //         state: 'Delhi'
    //       }
    //     },
    //     {
    //       firstName: 'Deepanshi',
    //       lastName: 'Mittal',
    //       age: 21,
    //       address: {
    //         place: 'Ambetha',
    //         state: 'Uttar Pradesh'
    //       }
    //     },
    //     {
    //       firstName: 'Aman',
    //       lastName: 'Arora',
    //       age: 21,
    //       address: {
    //         place: 'Ram Nagar',
    //         state: 'Uttarakhand'
    //       }
    //     },
    //     {
    //       firstName: 'Kushagr',
    //       lastName: 'Bansal',
    //       age: 21,
    //       address: {
    //         place: 'Clement Town',
    //         state: 'Uttarakhand'
    //       }
    //     },
    //   ];
    //   this.loaded = true;
    // }, 2000);
   // this.users =[];
    this.users = this.dataService.getUsers();
    this.showExtended = true;
    this.setCurrentClasses();
    this.setCurrentStyles();
    // this.addUser({
    //   firstName: 'Sarfaraz',
    //   lastName: 'Nawaz'
    // });
  }
  // addUser(){
  //   this.user.registered = new Date();
  //   this.users.push(this.user);
  //   this.user = {
  //     firstName: '',
  //     lastName: '',
  //     age: null,
  //     address:{
  //       place:'',
  //       state:''
  //     },
  //     profile: '',
  //     salary: null,
  //     image: '',
  //     registered: null,
  //     isActive: false,
  //     hide: true
  //   }
  // }
  setCurrentClasses() {
    this.currentClasses = {
      'btn-success': this.enableAdd,
      'big-text': this.showExtended
    }
  }
  setCurrentStyles() {
    this.currentStyles = {
      'padding-top': this.showExtended ? '0': '40px',
      'font-size': this.showExtended ? '' : '40px'
    }
  }
  fireEvent(){
    console.log('Cursor came here...');;
  }
  toggleHide(user: User){
    user.hide = !user.hide;
  }
  onSubmit({value}: {value:User}){
    value.isActive=false;
    value.registered = new Date();
    value.hide=true;
    this.dataService.addUser(value);
    this.form.reset();
  }
}

