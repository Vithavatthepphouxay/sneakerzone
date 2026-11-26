var posts=[
 ["Xu hướng","5 mẫu giày chạy bộ đáng mua nhất mùa này","Tổng hợp những đôi giày nhẹ, êm và bền cho người mới bắt đầu.","12/11/2026","tin-giay-chay-bo.jpg"],
 ["Hướng dẫn","Cách chọn size giày chuẩn khi mua online","Đo chân đúng cách để không phải đổi trả nhiều lần.","08/11/2026","tin-bang-size.jpg"],
 ["Bảo quản","Vệ sinh giày trắng đúng cách tại nhà","Giữ giày sáng màu lâu hơn chỉ với vài bước đơn giản.","03/11/2026","tin-ve-sinh-giay.jpg"],
 ["Khuyến mãi","Tuần lễ ưu đãi: giảm đến 50% toàn bộ cửa hàng","Danh sách mẫu giày giảm sâu và cách mua giá tốt.","29/10/2026","tin-sale-50.jpg"],
 ["Xu hướng","Sneaker retro trở lại: nên phối đồ thế nào","Gợi ý phối giày retro với quần jeans, jogger và váy.","25/10/2026","tin-sneaker-retro.jpg"],
 ["Thể thao","Lịch chạy bộ 4 tuần cho người mới","Tăng quãng đường dần để tránh chấn thương.","20/10/2026","tin-chay-bo-4-tuan.jpg"]
];
document.getElementById("list").innerHTML=posts.map(function(p){
  return '<div class="news"><div class="img"><img src="images/'+p[4]+'" alt=""></div><div class="b"><span class="chip">'+p[0]+'</span><h3>'+p[1]+'</h3><p>'+p[2]+'</p><time>'+p[3]+'</time></div></div>';
}).join("");