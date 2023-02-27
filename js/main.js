const elsTabLink = document.querySelectorAll('.js-tab-link');
const elsTabItem = document.querySelectorAll('.tabs__item');
const elsTabPanel = document.querySelectorAll('.tabs__panel');
const elsAccordionItem =document.querySelectorAll('.accordion__item');
const elsAccordionButton = document.querySelectorAll('.accordion__item--toggler');

const modifiers ={
  tabItemActive:'tabs__link--active' ,
  tabPanelActive:'tabs__panel--active'
};


function close( ){
  elsAccordionItem.forEach(function(elAccordionItem){
    elAccordionItem.classList.remove('accordion__item--text-open');
  });
}
function deactivateTabItems ( ){
  elsTabItem.forEach(function(elTabItem){
    elTabItem.classList.remove(modifiers.tabItemActive);
  });
}
function deactivateTapsPanel(){
  elsTabPanel.forEach(function(elTabPanel){
    elTabPanel.classList.remove(modifiers.tabPanelActive);
  });
}
elsTabLink.forEach(function(elTabLink){
  elTabLink.addEventListener('click' , function(evt){
    evt.preventDefault();
    deactivateTabItems ( );
    elTabLink.parentElement.classList.add(modifiers.tabItemActive);
    deactivateTapsPanel( );
    const elTargetPanel = document.querySelector(`#${elTabLink.href.split('#')[1]}`);
    elTargetPanel.classList.add(modifiers.tabPanelActive);
  });
  
});

elsAccordionButton.forEach(function(elAccordionButton){
  elAccordionButton.addEventListener('click' , function(){
    close( );
    elAccordionButton.closest('.accordion__item').classList.add('accordion__item--text-open');
  });
});