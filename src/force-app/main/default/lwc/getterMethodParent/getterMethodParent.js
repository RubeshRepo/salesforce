import Address from '@salesforce/schema/Lead.Address';
import { LightningElement } from 'lwc';

export default class GetterMethodParent extends LightningElement {

employee ={
    name:"Rubesh",
    age: 32,
    Address:{
        DoorNumber:"78",
        PinCode:603202
    }
}


}