// -------------------- Khởi tạo thông tin mặt hàng --------------------

var itemList = {
    // -------------------- Trang sức nữ --------------------
    "tsn001": {
        "name" : "Dây Chuyền Bạc Nữ Khắc Tên Hình Trái Tim DCN0460",
        "price" : 430000,
        "photo" : "images/sanpham/tsnu1.jpg"
    },
    "tsn002": {
        "name" : "Dây Chuyền Bạc Nữ Khắc Tên Mặt Hình Trái Tim DCN0451",
        "price" : 430000,
        "photo" : "images/sanpham/tsnu2.jpg"
    },
    "tsn003": {
        "name" : "Dây Chuyền Bạc Nữ Khắc Tên Hình Trái Tim DCN0496",
        "price" : 430000,
        "photo" : "images/sanpham/tsnu3.jpg"
    },
    "tsn004": {
        "name" : "Dây Chuyền Bạc Nữ Mặt Trăng Sao Khắc Tên DCN0436",
        "price" : 450000,
        "photo" : "images/sanpham/tsnu4.jpg"
    },
    "tsn005": {
        "name" : "Dây Chuyền Cỏ 4 Lá Khắc Tên DCN0456",
        "price" : 380000,
        "photo" : "images/sanpham/tsnu5.jpg"
    },
    "tsn006": {
        "name" : "Dây Chuyền Bạc Nữ Cá Tính Khắc Tên DCN0423",
        "price" : 450000,
        "photo" : "images/sanpham/tsnu6.jpg"
    },
    "tsn007": {
        "name" : "Dây Chuyền Bạc Nữ Hình Trái Tim Khắc Tên Đẹp DCN0450",
        "price" : 430000,
        "photo" : "images/sanpham/tsnu7.jpg"
    },
    "tsn008": {
        "name" : "Lắc Tay Bi Bạc Nữ Khắc Tên Theo Yêu Cầu LTN0146",
        "price" : 480000,
        "photo" : "images/sanpham/tsnu8.jpg"
    },
    "tsn009": {
        "name" : "Dây chuyền bạc nữ mặt trái tim chữ Love đính đá đẹp DCN0421",
        "price" : 450000,
        "photo" : "images/sanpham/tsnu9.jpg"
    },
    // -------------------- Trang sức đôi --------------------
    "tsd001": {
        "name" : "Nhẫn Đôi Bạc Nhẫn Cặp Bạc Đẹp Đính Đá Tím ND0285",
        "price" : 550000,
        "photo" : "images/sanpham/tsd1.jpg"
    },
    "tsd002": {
        "name" : "Nhẫn Đôi Bạc Nhẫn Cặp Bạc Đẹp Đính Đá Xanh ND0042",
        "price" : 600000,
        "photo" : "images/sanpham/tsd2.jpg"
    },
    "tsd003": {
        "name" : "Nhẫn Đôi Bạc Nhẫn Cặp Bạc Đẹp Đính Đá Tím ND0280",
        "price" : 700000,
        "photo" : "images/sanpham/tsd3.jpg"
    },
    "tsd004": {
        "name" : "Nhẫn Đôi Bạc Nhẫn Cặp Bạc Tình Nhân ND0286",
        "price" : 550000,
        "photo" : "images/sanpham/tsd4.jpg"
    },
    "tsd005": {
        "name" : "Nhẫn Đôi Bạc Nhẫn Cặp Bạc Đẹp Đính Đá Sang Trọng ND0284",
        "price" : 680000,
        "photo" : "images/sanpham/tsd5.jpg"
    },
    "tsd006": {
        "name" : "Nhẫn Đôi Bạc Nhẫn Cặp Bạc Đẹp ND0288",
        "price" : 500000,
        "photo" : "images/sanpham/tsd6.jpg"
    },
    "tsd007": {
        "name" : "Nhẫn Đôi Bạc Nhẫn Cặp Bạc Đơn Giản ND0290",
        "price" : 500000,
        "photo" : "images/sanpham/tsd7.jpg"
    },
    "tsd008": {
        "name" : "Nhẫn Đôi Bạc Nhẫn Cặp Bạc Đẹp Đính Đá Vàng ND0291",
        "price" : 500000,
        "photo" : "images/sanpham/tsd8.jpg"
    },
    "tsd009": {
        "name" : "Nhẫn Đôi Bạc Nhẫn Cặp Bạc Đẹp Đính Đá Sang Trọng ND0246",
        "price" : 680000,
        "photo" : "images/sanpham/tsd9.jpg"
    },
    // -------------------- Trang sức nam --------------------
    "tsna001": {
        "name" : "Nhẫn Nam Bạc Đẹp Đính Đá Trắng Sang Trọng NNA0066",
        "price" : 650000,
        "photo" : "images/sanpham/tsna1.jpg"
    },
    "tsna002": {
        "name" : "Nhẫn Bạc Nam Hình Rồng Mặt Đá Xanh NNA0068",
        "price" : 650000,
        "photo" : "images/sanpham/tsna2.jpg"
    },
    "tsna003": {
        "name" : "Nhẫn Nam Bạc Hình Ngựa Cho Người Tuổi Ngọ NNA0069",
        "price" : 680000,
        "photo" : "images/sanpham/tsna3.jpg"
    },
    "tsna004": {
        "name" : "Lắc Tay Bạc Nam Mắt Xích LTA0002",
        "price" : 1660000,
        "photo" : "images/sanpham/tsna4.jpg"
    },
    "tsna005": {
        "name" : "Nhẫn Bạc Nam Đơn Giản NNA0039",
        "price" : 500000,
        "photo" : "images/sanpham/tsna5.jpg"
    },
    "tsna006": {
        "name" : "Dây Chuyền Bạc Nam 1 Cây DCK0005",
        "price" : 1445000,
        "photo" : "images/sanpham/tsna6.jpg"
    },
    "tsna007": {
        "name" : "Nhẫn Bạc Nam Đẹp Full Đính Đá NNA0078",
        "price" : 650000,
        "photo" : "images/sanpham/tsna7.jpg"
    },
    "tsna008": {
        "name" : "Nhẫn Bạc Nam Mặt Đá Đỏ Hình Hổ Sang Trọng NNA0105",
        "price" : 700000,
        "photo" : "images/sanpham/tsna8.jpg"
    },
    "tsna009": {
        "name" : "Dây Chuyền Bạc 925 Nam Dạng Xoắn Giá Rẻ DCK0009",
        "price" : 870000,
        "photo" : "images/sanpham/tsna9.jpg"
    },
    // -------------------- Trang sức cho bé --------------------
    "tsb001": {
        "name" : "Vòng Bạc Cho Bé Khắc Tên Có Chuông LTT0030",
        "price" : 500000,
        "photo" : "images/sanpham/tsb1.jpg"
    },
    "tsb002": {
        "name" : "Dây Chuyền Bạc Khắc Tên Cho Bé Hình Con Heo DCT0015",
        "price" : 416000,
        "photo" : "images/sanpham/tsb2.jpg"
    },
    "tsb003": {
        "name" : "Dây Chuyền Bạc Trẻ Em Khắc Tên DCT0001",
        "price" : 730000,
        "photo" : "images/sanpham/tsb3.jpg"
    },
    "tsb004": {
        "name" : "Dây Chuyền Bạc Khắc Tên Cho Bé DTA0008",
        "price" : 700000,
        "photo" : "images/sanpham/tsb4.jpg"
    },
    "tsb005": {
        "name" : "Dây Chuyền Bạc Cho Bé Gái Hình Trái Châu DTN0003",
        "price" : 650000,
        "photo" : "images/sanpham/tsb5.jpg"
    },
    "tsb006": {
        "name" : "Dây Chuyền Trẻ Em Hình Hello Kitty DTN0005",
        "price" : 400000,
        "photo" : "images/sanpham/tsb6.jpg"
    },
    "tsb007": {
        "name" : "Lắc Bạc Khắc Tên Cho Bé Hình Con Chuột LTT0040",
        "price" : 550000,
        "photo" : "images/sanpham/tsb7.jpg"
    },
    "tsb008": {
        "name" : "Dây Chuyền Bạc Khắc Tên Cho Bé Hình Con Chó DCT0016",
        "price" : 416000,
        "photo" : "images/sanpham/tsb8.jpg"
    },
    "tsb009": {
        "name" : "Lắc Tay Bạc Khắc Tên Cho Bé Hình Cỏ 4 Lá LTT0024",
        "price" : 400000,
        "photo" : "images/sanpham/tsb9.jpg"
    },
}

// -------------------- Thêm sản phẩm vào giỏ hàng --------------------

function addCart(data) {

    const number_item = document.getElementById('sl_' + data);
    const info_item = itemList[data];

    if(number_item.value == 0){
        alert("Vui lòng chọn số lượng cho sản phẩm: " + info_item.name);
    }else{
        if(typeof localStorage[data] == 'undefined') {
            window.localStorage.setItem(data, parseInt( number_item.value));
        }else{
            if(localStorage.getItem(data) < 100){
            
                const currentNumber = parseInt( number_item.value)
                const oddNumber = parseInt(window.localStorage.getItem(data));

                window.localStorage.setItem(data, currentNumber + oddNumber);
            }

            if(localStorage.getItem(data) >= 100 ) {
                window.localStorage.setItem(data,100);
            } 
        }
        alert("Đã thêm : " + number_item.value + " " + info_item.name + " vào giỏ hàng");
    }
}



