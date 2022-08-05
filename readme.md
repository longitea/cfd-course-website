# CFD COURSE WEBAPP

CFD COURSE là 1 website khóa học được xây dựng bằng Framwork React. Bao gồm các tính năng giới thiệu khóa học, và xem nội dung chi tiết các khóa học. Cho phép client đăng ký tài khoản và ...

## Imagines
- chỗ này chèn 1 tấm hình vào
- đính kèm 1 đường link


## Features
- ...
- Login/Register Account




## Hooks
- useContext : quản lý state pop-up isLogin ( nếu user chưa login -> thì bật popup lên)
- Redux : làm authen, quản lý store user info




## More Detail
### Login/Register Account
- Thực hiện chức năng authen client bằng JWT
- Sử dụng useContext để quản lý thông tin user sau khi login thành công.
- Sử dụng localStorage để lưu accessToken để authorize yêu cầu của client 




### Folder
chia folder theo chức năng.
##### hooks
1. useAuth : Context(bắt đầu bằng use) bọc toàn bộ ứng dụng, quản lý state User data Login

2. viết lại useAuth: hàm tạo (action contructor), mục đích dùng để đefine Action -> reducer


##### Store
0. index: define store
1. authReducer: define reducer, quản lý state user Login





##### Nháp
1. Context : quản lý pop-up chưa có user thì bật pop-up và ngược lại
2. Redux: 