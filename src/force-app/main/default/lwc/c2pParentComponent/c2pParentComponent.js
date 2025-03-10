import { LightningElement, track } from 'lwc';

export default class C2pParentComponent extends LightningElement {
    showModal = false;
    
    @track msg = "Not Changed";
 
    openModal(){
        this.showModal = true;
    }

    closeModalofChild(event){

        this.msg = event.detail;
        this.showModal = false;
    }
}