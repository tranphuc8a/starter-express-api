

var LoginRouter = require('../router/login_router.js').LoginRouter;
var UserRouter = require('../router/user_router.js').UserRouter;
var NhankhauRouter = require('../router/nhankhau_router.js').NhankhauRouter;
var LichsuRouter = require('../router/lichsu_router.js').LichsuRouter;
var HokhauRouter = require('../router/hokhau_router.js').HokhauRouter;
var TamtrutamvangRouter = require('../router/tamtrutamvang_router.js').TamtrutamvangRouter;
var ThuphiRouter = require('../router/thuphi_router.js').ThuphiRouter;
var Admin = require('../admin.js').Admin;

class Router {
	constructor(app) {
		this.app = app;
		this.loginRouter = new LoginRouter(app);
		this.userRouter = new UserRouter(app);
		this.nhankhauRouter = new NhankhauRouter(app);
		this.lichsuRouter = new LichsuRouter(app);
		this.hokhauRouter = new HokhauRouter(app);
		this.tamtrutamvangRouter = new TamtrutamvangRouter(app);
		this.thuphiRouter = new ThuphiRouter(app);
	}
	route() {
		this.loginRouter.route();
		this.userRouter.route();
		this.nhankhauRouter.route();
		this.lichsuRouter.route();
		this.hokhauRouter.route();
		this.tamtrutamvangRouter.route();
		this.thuphiRouter.route();

		this.app.route("/admin")
			.get(function(req, res){
				let admin = new Admin();
				admin.execute(req, res);
			});
		this.app.route("/student_images")
			.get(function(req, res){
				const path = require('path');
				const filePath = path.join(__dirname, '../view/student_images.html');
				console.log(filePath);
				res.sendFile(filePath);
			});
	}
}

module.exports = { Router };

