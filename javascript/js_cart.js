// -------------------- Hiển thị trang sản phẩm --------------------

function render () {
    
    var items_ls = [];

    for ( var i = 0, len = localStorage.length; i < len; ++i ) {
        var tmp = {
            "name": localStorage.key(i), 
            "number" : localStorage.getItem( localStorage.key( i ))
        } 
        items_ls.push(tmp);
    }
    
    var allMoney = 0; 

    // -------------------- Hiển thị từng sản phẩm --------------------

    items_ls.forEach(element => {

        const info_item = itemList[element.name];
        const number_item = element.number;
        const get_content = document.querySelector(".get_content");
        var price_item = parseInt(number_item)*info_item.price;
        const key_item = element.name;

        allMoney = allMoney + price_item;
        get_content.innerHTML += `
        <tr >
            <th><img src="${info_item.photo}" alt="" width="150px"></th>
            <th>${info_item.name}</th>
            <th><input type = "number" min = "0" max = "100" value = "${number_item}" size = "3" id="sl_${element.name}">
            <button style="background-color: white; border: 0px;" onclick="update('${element.name}','${number_item}')"><i style="color: #4c63e6;" class="fa-solid fa-arrows-rotate"></i></button></th>
            <th>${info_item.price}đ</th>
            <th>${price_item}đ</th>
            <th class="delete_card"><a onclick="remove_item('${key_item}')" href="#"><i class="fa-solid fa-trash-can"></i></a></th>
        </tr>  
        `;
    });
   
    // -------------------- Hiển thị tổng thành tiền --------------------

    const  moneyCart = document.querySelector('.money');

    moneyCart.innerHTML = allMoney;

    // -------------------- Hiển thị tiền khuyễn mãi --------------------

    const stage = document.querySelector('.stage');
    const moneyStage = discount()* allMoney;

    stage.innerHTML = moneyStage;

    // -------------------- Hiển thị tiền thuế --------------------

    const tax = document.querySelector('.tax');
    const moneyTax = 0.1 *(allMoney - moneyStage);

    tax.innerHTML = moneyTax;

    // -------------------- Hiển thị tổng tiền đơn hàng --------------------

    const moneyAllCart = document.querySelector('.money-cart');

    moneyAllCart.innerHTML = allMoney - moneyStage + moneyTax;
}

// -------------------- Cập nhật số lượng hàng trong đơn --------------------

function update(data,oldnum) {

    const number_item = document.getElementById('sl_' + data);
    const info_item = itemList[data];

    if(number_item.value != oldnum){
        if(number_item.value == 0){
            remove_item(data);
        }else{      

            const currentNumber = parseInt(number_item.value)
            const oddNumber = parseInt(window.localStorage.getItem(data));

            window.localStorage.setItem(data, currentNumber);
            alert("Số lượng sản phẩm: "  + info_item.name + " đã được thay đổi thành " + number_item.value);
        }
        location.reload()
    }
}

// -------------------- Giảm giá cuối tuần --------------------

function discount() {

    const date = new Date();
    const weekday = date.getDay();

    if( weekday == 8) {
        return 0.1;
    }
    return 0;
}

// -------------------- Xóa mặt hàng ra khỏi giỏ hàng --------------------
 
function remove_item(ob) {

    const info_item = itemList[ob];
    
    alert("Đã xóa : " + info_item.name + " ra khỏi giỏ hàng");
    window.localStorage.removeItem(ob);
    location.reload();
}

render();