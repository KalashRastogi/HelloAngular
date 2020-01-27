import {Component, OnInit} from '@angular/core';
import { User } from '../../models/User'
@Component({
    selector: 'app-user',
    //template: '<h2>Babu Rao</h2>'
    templateUrl: './user.component.html',
    // styles: [
    //     `h2 {
    //         color:red;
    //     }`
    // ],
    styleUrls: ['./user.component.css']
})
export class UserComponent{
    user: User;
    constructor(){
        
    }
    ngOnInit(){

    }
    // properties
    
    // firstName = 'Babu';
    // lastName = 'Rao';
    // age = 31;
    // address = {
    //     street: 'chall',
    //     city: 'Mumbai',
    //     state: 'Maharashtra'
    // }
    // friends: string[];
    // numArr: number[];
    // anyArr: any[];
    // customArr: [string, number, boolean];
    // booleanVar: boolean;
    // usable: void;
    // undef:undefined;
    // nullVar: null;

    //methods
    
    // constructor(){ //mostly used to inject the services
    //     console.log('Hello '+ this.firstName);
    //     this.friends = ['Raju', 'Shyam'];
    //     this.sayHello();
    //     //console.log(this.calcSum(2,3));
    //     // this.hasBirthday();
    //     // this.sayHello();
    // }
    // sayHello(){
    //     console.log(this.firstName);
    //     console.log(this.lastName);
    //     console.log(this.age);
    //     console.log(this.address);
    //     console.log(this.friends);
    // }
    // showAge(){
    //     return this.age;
    // }
    // calcSum(num1: number, num2:number):number{
    //     return num1+num2;
    // }
    // hasBirthday(){
    //     this.age += 1;
    // }
}