function updateTime() {
    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    if (m < 10) {
      m = "0" + m;
    }
    if (s < 10) {
      s = "0" + s;
    }
    if (h < 10){
      h = "0" + h;
    }
    document.getElementById("banner-clock").innerHTML = h + ":" + m + ":" + s;
  }
  updateTime();
  setInterval(function () {
    updateTime();
  }, 1000)

let danhSachSanPham = document.getElementById('danh-sach-san-pham')
for (let sanpham of JSON.parse(localStorage.getItem("cart"))) {
    danhSachSanPham.innerHTML += "<div class='food'> \
            <div class='ava'> \
                <img src='" + sanpham.img + "'> \
            </div> \
            <div class='name'> \
                <h3>" + sanpham.name + "</h3> \
                <h4>" + sanpham.add + "</h4> \
                <hr> \
                <p>" + sanpham.type + "</p> \
                <p style='text-align: right; float: right;'>" + sanpham.price + "</p> \
            </div> \
        </div>";
}