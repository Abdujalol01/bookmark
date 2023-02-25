const elsTabLink = document.querySelectorAll('.js-tab-link');
const elsTabItem = document.querySelectorAll('.tabs__item');
const elsTabPanel = document.querySelectorAll('.tabs__panel');
function deactivateTabItems ( ){
  elsTabItem.forEach(function(elTabItem){
    elTabItem.classList.remove('tabs__link--active');
  });
}
function deactivateTapsPanel(){
  elsTabPanel.forEach(function(elTabPanel){
    elTabPanel.classList.remove('tabs__panel--active');
  });
}
elsTabLink.forEach(function(elTabLink){
  elTabLink.addEventListener('click' , function(evt){
    evt.preventDefault();
    deactivateTabItems ( );
    elTabLink.parentElement.classList.add('tabs__link--active');
    deactivateTapsPanel( );
    const elTargetPanel = document.querySelector(`#${elTabLink.href.split('#')[1]}`);
    elTargetPanel.classList.add('tabs__panel--active');
  });
  
});
