import barba from '@barba/core';
import { restartWebflow } from "@finsweet/ts-utils";

console.log(restartWebflow)
window.Webflow ||= [];
window.Webflow.push(async () => {
  
  barba.init({
    transitions: [{
      name: 'default-transition',
      leave() {
        console.log('leave');
      },
      enter() {
        console.log('enter');
      }
    }]
  });

})

barba.hooks.afterEnter((data) => {
  console.log('afterEnter');
  restartWebflow();
})