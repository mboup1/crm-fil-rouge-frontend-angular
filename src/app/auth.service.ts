import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;
  token: string | null = null; // Initialize the token to null;


  login(name: string, password: string): boolean {
    // Simulate authentication logic here
    if (name === 'dame' && password === 'dame') {
      this.isLoggedIn = true;
      const token = "s%3AQlNNTt0yfMHpfpHKgNi9WGD-LbvSz9GJ.F8rZDm%2FUSq7An4OX2%2BVPEip3AFxt2u1wd8qb5NIDhrs";
      localStorage.setItem('token', token); // Store the token
      return true;
    }
    return false;
  }

  logout(): void {
    // Clear token and user info, and set isLoggedIn to false
    this.isLoggedIn = false;
    this.token = null;
    localStorage.removeItem('token'); // Remove the token on logout
  }
}
