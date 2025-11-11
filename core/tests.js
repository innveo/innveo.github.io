var x=document.getElementById("grid").innerHTML;
for (let i = 1; i < 11; i++) {
  let spn=Math.round(Math.random()**3*3+0.5);
  let rx=Math.round(Math.random()*3+0.5);
  x=`<a class="grid-item span-`+spn+` x`+rx+`"><img loading="lazy" src="https://picsum.photos/600/800?random=`+i+`"/><section class="botlef"><header>`+i+`-th tile</header><footer>span-`+spn+` x`+rx+` also how does it look if the text is long.</footer></section></a>`+x;
}
document.getElementById("grid").innerHTML=x;