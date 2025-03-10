import { LightningElement } from 'lwc';

export default class C2pChildComponent extends LightningElement {
    content = 'GRK007evil';

    handleOkay(){
        const closeModalEvent = new CustomEvent('closemodal',{
            bubbles:true,
            detail:"Msg from Child Component"
        }                
        );

        this.dispatchEvent(closeModalEvent);
    }

    printConsoleLog(){
        console.log('Event bubbling bcz of bubbles is true');
    }
}