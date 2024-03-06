// -------------------- Kiểm lỗi form Đăng nhâp, Đăng ký, Liên hệ --------------------

const TaiKhoan = document.getElementById('TaiKhoan');
const psw = document.getElementById('psw');
const psw_confirm = document.getElementById('psw-confirm');
const Name = document.getElementById('name');
const email = document.getElementById('email');
const SDT = document.getElementById('SDT');
const content = document.getElementById('content');
const Check = document.getElementById('Check');

function checkInputs() {

    if(Name != null) {

        const nameValue = Name.value.trim();

        if(nameValue.length == 0) {
            alert('Vui lòng nhập họ và tên');
            return false;
        }else if(nameValue.length < 4) {
            alert('Vui lòng nhập họ và tên dài hơn 4 kí tự');
            return false;
        }
    }
    
    if(TaiKhoan != null) {

        const TaiKhoanValue = TaiKhoan.value.trim();

        if(TaiKhoanValue.length == 0) {
            alert('Vui lòng nhập tài khoản');
            return false;
        }
    }

    if(psw != null) {

        const pswValue = psw.value.trim();

        if(pswValue.length == 0) {
            alert('Vui lòng nhập mật khẩu');
            return false;
        }else if(pswValue.length < 8) {
            alert('Mật khẩu phải dài hơn 8 kí tự');
            return false;
        }
    }

    if(psw_confirm != null) {

        const psw_confirmValue = psw_confirm.value.trim();
        const pswValue = psw.value.trim();

        if(psw_confirmValue != pswValue) {
            alert('Nhập lại sai mật khẩu');
            return false;
        }
    }

    if(email != null) {

        const EmailValue = email.value.trim();
        const Emailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if(EmailValue.length == 0){
            alert('Vui lòng nhập Email');
            return false;
        }else if(!EmailValue.match(Emailformat)){
            alert('Bạn nhập không đúng định dạng Email');
            return false;
        }
    }

    if(SDT != null) {

        const SDTValue = SDT.value.trim();
        const SDTformat = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

        if(SDTValue.length == 0) {
            alert('Vui lòng nhập số điện thoại');
            return false;
        }else if(!SDTValue.match(SDTformat)){
            alert('Bạn nhập không đúng định dạng số điện thoại');
            return false;
        }
    }


    if(content != null) {

        const contentContactValue = content.value.trim();

        if(contentContactValue.length == 0) {
            alert('Vui lập nhập nội dung');
            return false;
        }else if(contentContactValue.length < 10) {
            alert('Vui lập nhập nội dung từ 10 ký tự trở lên');
            return false;
        }
    }

    if(Check != null) {
        if (!Check.checked){
            alert('Vui lòng tick vào điều khoản và quyền sử dụng');
            return false;
        } 
    }

    return true;
}

