let aboutus = [{
    "img": "https://scontent.fhan1-1.fna.fbcdn.net/v/t1.15752-9/82024468_2715272881927196_4271738089933635584_n.jpg?_nc_cat=109&_nc_ohc=iXdlY30UAEYAQlOmJ8WdWzE5rq8iB0YAuPaYaOi5kSotQCVW44uQMdlAA&_nc_ht=scontent.fhan1-1.fna&oh=3724208384d29a7f6967c3e11061eb8e&oe=5ED9536A",
    "name": "Nguyễn Văn Cường",
    "birth": "21/05/2000",
    "fb": "https://www.facebook.com/nguyencuong21520",
    "mess": "https://www.facebook.com/messages/t/nguyencuong21520",
    "ins": "https://www.instagram.com/nguyenvancuong__/?hl=vi"
},
{
    "img": "https://scontent.fhan3-1.fna.fbcdn.net/v/t1.15752-9/81385777_1395097874006016_4822034507060215808_n.jpg?_nc_cat=102&_nc_ohc=3NT7DtT8Y0sAQlqQxPu5TPQn037rs9yT5ldKYsXnYeoZ2WdnEIdDSwcwQ&_nc_ht=scontent.fhan3-1.fna&oh=68bf7ac69fdc8b2609e3dbd655f3cbe6&oe=5EAA376E",
    "name": "Phùng Minh Huyền",
    "birth": "22/10/2002",
    "fb": "https://www.facebook.com/hoennnnn",
    "mess": "https://www.facebook.com/messages/t/hoennnnn",
    "ins": "https://www.instagram.com/22th10/?hl=vi"
},
{
    "img": "https://scontent.fhan5-1.fna.fbcdn.net/v/t1.15752-9/81610427_580495192499872_5561770180582834176_n.jpg?_nc_cat=109&_nc_ohc=VGyFWg6pJHQAQnwKczINjUACd0LB9EwEHHo7D01bETS6zpTAtVFR0nmxg&_nc_ht=scontent.fhan5-1.fna&oh=c1f28eab1bca9a1c9c1e0ba4d33725b7&oe=5EA0D9E6",
    "name": "Nguyễn Hồng Hà",
    "birth": "10/08/2000",
    "fb": "https://www.facebook.com/hongha.nguyen.71697",
    "mess": "https://www.facebook.com/messages/t/hongha.nguyen.71697",
    "ins": "https://www.instagram.com/_hasua__/?hl=vi"
},
{
    "img": "https://scontent.fhan5-1.fna.fbcdn.net/v/t1.15752-9/80636905_1026532264349698_1718441884285665280_n.jpg?_nc_cat=109&_nc_ohc=4l9QZYklKx8AQm7Icw1jAH5Dc9cLWyGlJqAP4zXvkYEyDeNRQ4foSQMzw&_nc_ht=scontent.fhan5-1.fna&oh=bec424c38618576e686d75db970930d2&oe=5EB40E44",
    "name": "Nguyễn Hữu Đức",
    "birth": "08/11/2000",
    "fb": "https://www.facebook.com/hiimduc",
    "mess": "https://www.facebook.com/messages/t/hiimduc",
    "ins": "https://www.instagram.com/hiimduc_/?hl=vi"
},
];
let thongTin = document.getElementById('aboutus')
for (let x of aboutus) {
thongTin.innerHTML += "<div class='col-md-3 col-sm-6 aloo'>\
<div class='card' style='width:100%'>\
    <img class='card-img-top' src='" + x.img + "'>\
    <div class='card-body'>\
      <h4 class='card-title name'>" + x.name + "</h4>\
      <p class='card-text'>" + x.birth + "</p>\
      <div class='info'>\
      <a href='" + x.fb + "'><i class='fab fa-facebook designMXH'></i></a>\
      <a href='" + x.mess + "'><i class='fab fa-facebook-messenger'></i></a>\
      <a href='" + x.ins + "'><i class='fab fa-instagram' style='color: tomato;'></i></a>\
    </div>\
    </div>\
    </div>\
  </div>";
}