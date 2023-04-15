  "use strict";
  const tabsParent = document.querySelector(".tabs__items"),
  tabs = document.querySelectorAll(".tabs__link"),
  panels = document.querySelectorAll(".tabs__panel"),
  elItems = document.querySelectorAll(".tabs__item");
  
  function hideContent (){
    panels.forEach(item =>{
      item.classList.add("hide");
      item.classList.remove("show");
    });
    elItems.forEach(item=>{
      item.classList.remove("tabs__link--active");
    });
  }
  
  function showContent(i=0){
    panels[i].classList.add("show");
    panels[i].classList.remove("hide");
    elItems[i].classList.add("tabs__link--active");
  }
  
  tabsParent.addEventListener("click" , (event)=>{
    const target = event.target;
    if(target && target.classList.contains("tabs__link")){
      tabs.forEach((item,idx)=>{
        if(target==item){
          hideContent();
          showContent(idx);
        }
      });
    }
  });