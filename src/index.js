const { doc } = require('prettier');
/////////////////////////////////
//HEAD CODE
/*

//check local storage
if (localStorage.getItem('visited') === null) {
  // if the site hasn't been visited make age get visible
  document.head.insertAdjacentHTML("beforeend", `<style> .age-gate_component {display: flex} </style>`);
} else {
  // if the site has been visiting
  document.head.insertAdjacentHTML("beforeend", `<style> .age-gate_component {display: none} </style>`);
}

*/
/////////////////////////////////
//BODY CODE
document.addEventListener('DOMContentLoaded', function () {
  const HOMEDELAY = 1900;
  const ageGateOpen = document.querySelector('.age-gate_open');
  const ageGateClose = document.querySelector('.age-gate_close');
  const ageGateYes = document.querySelector('#age-yes');
  const homeLoadTrigger = document.querySelector('#home-load');

  // if the site hasn't been visited
  if (localStorage.getItem('visited') === null) {
    //check for essential triggers
    if (!ageGateOpen || !ageGateClose || !ageGateYes) {
      return;
    }
    // play age gate load animation and make scrolling impossible
    ageGateOpen.click();
    document.querySelector('body').classList.add('overflow-hidden');

    //wait for yes to be clicked
    ageGateYes.addEventListener('click', function (e) {
      // set the cookie
      localStorage.setItem('visited', 'true');
      ageGateClose.click();
      // load homepage after the age gate closes
      setTimeout(() => {
        document.querySelector('body').classList.remove('overflow-hidden');
        if (!homeLoadTrigger) return;
        homeLoadTrigger.click();
      }, HOMEDELAY);
    });
  } else {
    // if the site has been visiting
    if (!homeLoadTrigger) return;
    homeLoadTrigger.click();
  }
});
