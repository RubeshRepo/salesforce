import { api, LightningElement } from 'lwc';

export default class SetterMethodChild extends LightningElement {


    updatedEmpDetails;

    @api
    get empDetails(){
        console.log('getter method got executed');
        return this.updatedEmpDetails;
    }

    set empDetails(data){
        console.log('setter method got executed');

        this.updatedEmpDetails = {...data,
            name: "king",
            age:"58",
            Address:{
                DoorNumber:"99",
                PinCode:"609999"
            }
        };

    }


}