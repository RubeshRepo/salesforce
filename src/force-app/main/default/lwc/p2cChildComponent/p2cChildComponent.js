import { api, LightningElement } from 'lwc';

export default class P2cChildComponent extends LightningElement {
    @api message;
    @api name;

    @api country;
    @api receivedFromEvent;

    @api age = 32;

    @api resetAge(){
        this.age = 15;
    }

}