


 function changePreviousBg()
  {const previousBg = document.querySelector('.changed1','.changed2','.changed3');
  if(previousBg)
  {previousBg.classList.remove('changed1','changed2','changed3');
 }};


 function bgChange(action)
 {let changeBg2 = document.querySelector("#mid-box");

    if(action === "bg1" && !changeBg2.classList.contains('changed1')){changePreviousBg(); changeBg2.classList.add("changed1")}
    
    else{changeBg2.classList.remove('changed1')};
  
    if(action === "bg2" && !changeBg2.classList.contains('changed2')){changePreviousBg(); changeBg2.classList.add("changed2")}
    
    else{changeBg2.classList.remove('changed2')};

    if(action === "bg3" && !changeBg2.classList.contains('changed3')){changePreviousBg(); changeBg2.classList.add("changed3")}
    
    else{changeBg2.classList.remove('changed3')};
 }


 ////////////////////////////////////////////////////


  window.addEventListener("scroll",bgScroll,);

  function bgScroll()
  {let headerScroll = document.getElementById("header");
   let sidebarScroll = document.querySelector("#side-bar-container");

    scrollPosition = window.scrollY;

    if(scrollPosition > 0){headerScroll.classList.add("scrolled");
    sidebarScroll.classList.add("scrolled2");
    //navScroll.classList.add("scrolled3");
   }

    else{headerScroll.classList.remove("scrolled");
    sidebarScroll.classList.remove("scrolled2");
    //navScroll.classList.remove("scrolled3");
   }

  }
   
  /*function bgScroll2(nav)
  { scrollPosition = window.scrollY;

    if(scrollPosition > 0){nav.classList.add("scrolled3");}

    else{nav.classList.remove("scrolled3");}
  }

  let navScroll = document.querySelectorAll(".navbar-a");

  navScroll.forEach((nav)=> {bgScroll2(nav); })*/


  /////////////////////////////////////////////////////
 


 function openMenu()
   {let sideBar = document.getElementById('side-bar-container');

    sideBar.classList.add("show");
    sideBar.classList.remove('hide');}
 
 function closeBtn()
   {let sideBar = document.getElementById('side-bar-container');

   sideBar.classList.add("hide");}


  /////////Menu Button Toggling////////////

 function turnOffPreviousButton()
  {const previousButton = document.querySelector('.btn-color');
   if(previousButton)
    {previousButton.classList.remove('btn-color');}
  }

  const btnClick = document.querySelectorAll(".btn-click");
  btnClick.forEach((btn)=>
    {btn.addEventListener('click',()=>
       {let btns = btn;
       if(!btns.classList.contains('btn-color'))
         {turnOffPreviousButton();
         btns.classList.add('btn-color');}
       else{btns.classList.remove('btn-color');}
       })
    });
















