import Dialog from './Dialog.vue';
import { createVNode, render } from 'vue';

interface DialogType {
    title: string;
    content: string;
    confirm: () => void;
}

interface DialogOptionsType extends DialogType {
    cancel: () => void;
}

export class DialogCreator{
    containerEl:HTMLDivElement;
    options:DialogOptionsType;
    constructor(options:DialogType){
        this.containerEl=document.createElement('div');
        this.options={...options,cancel:this.unmount.bind(this)}
    }
    mount(){
        const vnode=createVNode(Dialog,{...this.options});
        render(vnode,this.containerEl);
        document.body.insertAdjacentElement('afterbegin',this.containerEl);
    }
    unmount(){
        this.containerEl.remove();
    }
}
