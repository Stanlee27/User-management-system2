# User Management System Frontend(Angular 10)

This project is a full-featured user management system built with Angular 10 and utilizes a fake backend interceptor to simulate authentication, registration, email verification, password reset, and role-based access control.

⚠️ This project is frontend-only and uses LocalStorage to persist user data, including support for simulating admin vs. user accounts.

# Features

- Login / Register
- Email verification
- Forgot / Reset Password
- Role-based access (Admin & User)
- Token-based authentication (simulated)
- Account CRUD operations (Admin only)
- Alerts for email-like notifications

# Getting Started

1. Clone the Repository

```bash
git clone https://github.com/MarlouTadlip1/user-management-system-frontend.git
cd user-management-system-frontend
```

2. Install Dependencies

```bash
npm install
```

3. Build the Application

```bash
ng build
```

4. Run the Application

```bash
ng serve
```

Then open your browser and go to:

```
http://localhost:4200
```

# Tips for Testing

- Try registering two users to see the Admin/User role difference.
- Reset password and email verification are mocked via alert pop-ups.
- Inspect LocalStorage to view stored user data.

# License

This project is open source and provided for educational purposes. You may reuse or modify it freely.

