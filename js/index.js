var items=[
 ["-20%","Nike Air Force 1 Low","1.990.000đ","2.450.000đ","4.8 (120 đánh giá)","nike-air-force-1.png"],
 ["-15%","Nike Dunk Low Retro","2.090.000đ","2.450.000đ","4.7 (98 đánh giá)","nike-dunk-low.png"],
 ["-25%","Adidas Ultraboost 5.0","2.990.000đ","3.990.000đ","4.9 (210 đánh giá)","adidas-ultraboost.png"],
 ["-18%","Adidas Galaxy 6","1.890.000đ","2.300.000đ","4.6 (87 đánh giá)","adidas-galaxy-6.png"],
 ["-22%","Air Jordan 1 Retro High","3.490.000đ","4.490.000đ","4.8 (176 đánh giá)","air-jordan-1-high.png"]
];
var cartIcon='<svg viewBox="0 0 24 24"><path d="M3 4h3l2 12h11l2-8H7"/><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/></svg>';
document.getElementById("list").innerHTML=items.map(function(p){
  return '<div class="card"><span class="badge">'+p[0]+'</span><img src="images/'+p[5]+'" alt=""><h3>'+p[1]+'</h3><div class="price">'+p[2]+'<s>'+p[3]+'</s></div><div class="rate">'+p[4]+'</div><button class="cart" onclick="alert(\'Đã thêm vào giỏ hàng\')">'+cartIcon+'</button></div>';
}).join("");
var cur=0,d=document.querySelectorAll("#dots span");
function go(n){cur=(cur+n+3)%3;d.forEach(function(x,i){x.classList.toggle("on",i==cur)})}
d.forEach(function(x,i){x.onclick=function(){go(i-cur)}});
setInterval(function(){go(1)},5000);