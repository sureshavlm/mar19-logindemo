
import { Component } from '@angular/core';

@Component({
	selector: 'login-container',
	templateUrl: './login.component.html'
})

export class LoginComponent {
	username: string = "admin";
	password: string = "admin";
	heading = 'Sign-In';
	status: boolean = false;

	flag: boolean;

	products: any = [{name: 'iPhone10', price: 60000, category: 'mobile', orderDate: new Date()},
					{name: 'Macbook Pro', price: 125000, category: 'laptop', orderDate: new Date()}];

	toggle() {
		this.flag = !this.flag;
	}


	doLogin() {
		//alert('Login successful!');
		this.status = true;
		this.heading = 'Login successful!';
	}
}