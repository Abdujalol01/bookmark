const tabsPanel = document.querySelectorAll(".tabs__panel") ,
tabsItem = document.querySelector(".tabs__items"),
tabLinks = document.querySelectorAll(".tabs__link"),
tabsList = document.querySelectorAll(".tabs__item"),
elToggler = document.querySelectorAll(".accordion__item--toggler"),
accordionContent = document.querySelectorAll(".accordion__item--content");



function close(){
  tabsPanel.forEach(item =>{
    item.classList.add("hide");
    item.classList.remove("show");
  });
  tabsList.forEach(item=>{
    item.classList.remove("tabs__link--active");
  });
}

function open( i=0){
  tabsPanel[i].classList.add("show");
  tabsPanel[i].classList.remove("hide");
  tabsList[i].classList.add("tabs__link--active");
}
tabsItem.addEventListener("click", (event)=>{
  const target= event.target;
  if(target &&target.classList.contains("tabs__link")){
    tabLinks.forEach((item,idx)=>{
      if(target == item){
        close();
        open(idx);
      }
    });
  }
});

elToggler.forEach(item=>{
  item.addEventListener("click" , ()=>{
    accordionContent.forEach(item=>{
      item.classList.toggle("show");
    });
  });
});