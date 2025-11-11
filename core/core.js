  
  // 50 character max lentgh of descriptions. It is about a complete line on my phone in acode


/*
-- your advantage
cuting time to market
lowering manufacturing prices
clear conveying vision
turning innovations into products
solving hard problems
protecting intellectual properties
developing new technologies
organizing mass-manufacturing
geometry optimization

-- capabilities
technology development
graphic design
ui/ux
engineering
product design
mass-manufacturing

-- partners
foxconn
telekom
zippsafe

-- references
sme 
corporations
ngo 
governing bodies

tenders
competitions
work

-- awwards

-- freebies, blog, events, 

-- footer:
contact, legal, platforms, history, about, join us


-- history
maform technology zrt is the direct continuation of maform trhrough the founder.

-- about
philosophy ->
knowledge driven approach
measureable imapct
quantifyable parts 
-- good examples?
-- bad examples?

-- working at maform
partner system
external contributors
internships
working at maform


pages:::
-- filters
------ to filter portfolio, eg partners, capabilities, why work with us, awards, etc.

-- portfolio
------ showing either filtered or all projects
-- depths
------ portfolio type page for legal, about, and other pages?
------ should these be modals?
should a modal type page be accessible from menu

menu could be a navigation type modal


two main types of pages (constitute about three classic types):
1: content, smallest block of standalone content, eg a project page, blog post or similar, presented in a modal, the menu modal is on top of all
2: collection, a collection of content pages or collections (or mixed?) on a grid

- content main picture to be hoisted to collections
- collection main picture is either custom, or based on content hierarchy or is a craroussel or is a mosaic





*/


//23456789 123456789 123456789 123456789 123456789
  
 var full=0;
 
 //full screen
 function fullscreen(){ if (full==0){var e = document.documentElement;
    var requestMethod = e.requestFullscreen || e.webkitRequestFullscreen || e.mozRequestFullScreen || e.msRequestFullscreen;console.log(requestMethod);
    if(requestMethod){requestMethod.apply(e);full=1;};}else{
        var requestMethod = document.exitFullscreen || document.webkitExitFullscreen || document.mozCancelFullScreen || document.msExitFullscreen;
        if(requestMethod){requestMethod.apply(document);full=0;}}}

let xh=document.getElementsByClassName("x1");
let xx=0;
function hide(){xx=1-xx;
  for(let i=0; i<xh.length;i++){xh[i].classList.toggle("x1h", xx);}
}

var toggle = document.getElementById("theme");

var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
if (storedTheme)
    document.documentElement.setAttribute('data-theme', storedTheme)

toggle.onclick = function() {
    var currentTheme = document.documentElement.getAttribute("data-theme");
    var targetTheme = "light";

    if (currentTheme === "light") {
        targetTheme = "dark";
    }

    document.documentElement.setAttribute('data-theme', targetTheme);
    localStorage.setItem('theme', targetTheme);
};