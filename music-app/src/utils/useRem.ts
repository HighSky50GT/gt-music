import { useWindowSize } from '@vueuse/core';
import { watch } from 'vue';
export function useRem(){
    let {width} = useWindowSize();
    watch(width,(value) =>{
        const root = document.documentElement
        let rem = value / 7.5
        console.log(rem)
        root.style.fontSize = `${rem}px`
    });
}


