//Khoi tao danh sach san pham
function createProduct() {
  if (localStorage.getItem("products") == null) {
    let products = [
      {
        id: 1,
        status: 1,
        title: "Gel nha đam",
        img: "./assets/img/products/sp1.jpg",
        category: "Món mặn",
        price: 200000,
        desc: "Gel Nha Đam Milaganics Dưỡng Ẩm & Làm Mềm Da là sản phẩm dưỡng da luôn nằm trong top bán chạy của thương hiệu Milaganics đến từ Việt Nam. Gel Aloe Vera với 98% thành phần chiết xuất từ nha đam tự nhiên, lành tính và an toàn cho da. Chất gel trong suốt mỏng nhẹ giúp giữ ẩm, làm mát, dịu da tức thì và nuôi dưỡng da mềm mại; đồng thời còn có công dụng nuôi dưỡng tóc, móng chắc khỏe.",
      },
      {
        id: 2,
        status: 1,
        title: "Combo gội xả Keratin & Biotin Milaganics",
        img: "./assets/img/products/sp2.jpg",
        category: "Món mặn",
        price: 180000,
        desc: "Dầu gội xả Keratin & Biotin Milaganics là lựa chọn lý tưởng giúp làm sạch sâu, tăng khả năng hấp thu dưỡng chất và ngăn chặn gãy rụng tóc. Một lưu ý đối với mái tóc hư tổn, chỉ làm sạch da đầu thôi là chưa đủ, bạn cần quan tâm đến bộ liệu trình chăm dưỡng tóc chuyên sâu, phục hồi hư tổn và kích thích quá trình tái tạo tóc mới. Trọn bộ giải pháp Keratin & Biotin Milaganics sẽ là giải pháp tối ưu dành cho bạn.",
      },
      {
        id: 3,
        status: 1,
        title: "Son dưỡng thiên nhiên",
        img: "./assets/img/products/sp3.jpg",
        category: "Món mặn",
        price: 180000,
        desc: "Son Dưỡng Môi Milaganics 4.5g là dòng sản phẩm son dưỡng đến từ thương hiệu mỹ phẩm Milaganics xuất xứ Việt Nam, được làm từ 100% thành phần thiên nhiên như Gấc, Trà xanh, Dừa, Nha đam, giúp cung cấp độ ẩm và nuôi dưỡng cho đôi môi căng mọng, mướt mềm, hỗ trợ giảm thâm và giúp sắc son lên màu chuẩn và bền đẹp. Sản phẩm với hương thơm nhẹ nhàng, sẽ khiến bạn yêu thích ngay từ lần đầu sử dụng.",
      },
      {
        id: 4,
        status: 1,
        title: "Toner thiên nhiên ",
        img: "./assets/img/products/sp3.jpg",
        category: "Món mặn",
        price: 699000,
        desc: "Toner Milaganics với thành phần chính từ các loại chiết xuất như cây phỉ, tràm trà, trà xanh, nha đam kết hợp cùng nước cất hoa hồng và các nguyên liệu tự nhiên khác, giúp cân bằng độ pH, giảm tiết dầu và tình trạng viêm. Đây đang là một trong những loại sản phẩm tự nhiên được rất nhiều tín đồ làm đẹp săn lùng hiện nay.",
      },
    //   {
    //     id: 5,
    //     status: 1,
    //     title: "Cơm chiên cua",
    //     img: "./assets/img/products/com_chien_cua.png",
    //     category: "Món mặn",
    //     price: 280000,
    //     desc: "Cơm nấu từ gạo ST25 dẻo, hạt cơm tơi ngon, thịt cua tươi chắc nịch, bếp đảo cho săn hạt cơm, rồi đổ cua đã xào thơm vào, xúc miếng cơm chiên cua đầy đặn có thêm hành phi giòn rụm, món ngon như vậy đảm bảo tranh nhau đến miếng cuối cùng.",
    //   },

    //   {
    //     id: 6,
    //     status: 1,
    //     title: "Súp bào ngư hải sâm (1 phần)",
    //     img: "./assets/img/products/sup-bao-ngu-hai-sam.jpeg",
    //     category: "Món mặn",
    //     price: 540000,
    //     desc: "Súp bào ngư Bếp Hoa có bào ngư kết hợp cùng sò điệp, tôm tươi... được hầm trong nhiều giờ với rau củ & nấm đông trùng tạo ra vị ngọt tự nhiên hiếm thấy. Một món ăn khiến cả người ốm cũng thấy ngon miệng đó ạ.",
    //   },
    ];
    localStorage.setItem("products", JSON.stringify(products));
  }
}

// Create admin account
function createAdminAccount() {
  let accounts = localStorage.getItem("accounts");
  if (!accounts) {
    accounts = [];
    accounts.push({
      fullname: "Hoàng Gia Bảo",
      phone: "hgbaodev",
      password: "123456",
      address: "https://github.com/hgbaodev",
      email: "musicanime2501@gmail.com",
      status: 1,
      join: new Date(),
      cart: [],
      userType: 1,
    });
    accounts.push({
      fullname: "Trần Nhật Sinh",
      phone: "0123456789",
      password: "123456",
      address: "",
      email: "",
      status: 1,
      join: new Date(),
      cart: [],
      userType: 1,
    });
    localStorage.setItem("accounts", JSON.stringify(accounts));
  }
}

window.onload = createProduct();
window.onload = createAdminAccount();
