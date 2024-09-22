import Toast from './Toast.vue';
import { createVNode, render } from 'vue';

interface ToastOption{
    message:string,
    position?:string,
    duration?:number,
}

export class ToastCreator{
    options:ToastOption;
    container:HTMLElement;
    constructor(theOptions:ToastOption){
        this.options=theOptions;
        if(!this.options.hasOwnProperty('duration')){
            this.options.duration=3000;
        }
        this.container=document.createElement('div');
    }
    // 加载
    present(){
        const vnode=createVNode(Toast,{...this.options});
        render(vnode,this.container);
        document.body.insertAdjacentElement('afterbegin',this.container);
        setTimeout(()=>{
            this.dismiss();
        },this.options.duration);
    }
    // 卸载
    dismiss(){
        this.container.remove();
    }
}