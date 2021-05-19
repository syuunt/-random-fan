
var Url ="https://www.dmm.co.jp/digital/videoa/-/detail/=/cid=1star00 "
URl = Url.slice( 0, -1 ) ;
var saito;

document.getElementById("click").addEventListener("click",function() {
  var num = Math.floor( Math.random() * 429 )+571 ;
  saito=URl + num;
  window.open(saito);
  document.getElementById("url").textContent=encodeURI(saito)
  document.getElementById("num").textContent= num

  });

