# Task Management System

A task management system that allows users to create accounts, manage projects, assign tasks to team members, and monitor progress. The system includes features for user authentication, project management, task tracking, and profile editing.

![Screenshot (112)](https://github.com/user-attachments/assets/0d55b545-a446-44ed-a8df-27191f0b522b)

## Sign in, Sign up, resetPassword, account confirmation
![Screenshot (111)](https://github.com/user-attachments/assets/6caca82a-7eea-434f-8fe2-7036e17107ef)

## Features

### **User Authentication**
- Users can register and log in to their accounts securely.
- Passwords are hashed for security.
- Users can reset theire passwords using there emails.
- After signing up a verification code to email provided to check the account confirmation



### **Profile Management**
![Screenshot (110)](https://github.com/user-attachments/assets/e6988252-442f-41ab-b0c6-f9caa684deee)
- Users can view and update their profile information, including username, fullname, and profile picture.

### **Project Management**
![Screenshot (102)](https://github.com/user-attachments/assets/1b06afbf-0aa7-49c3-b4c1-3a5448364938)

- Create and manage projects.
- Edit project information including title, description.
- Add and remove members from projects.


### **Task Management**
![Screenshot (105)](https://github.com/user-attachments/assets/7e52c287-dc4d-4a5f-b490-00ba0db004b4)

- Assign tasks to project members.
- Set task statuses: `Pending`, `In Progress`, or `Completed`.
- Edit and delete tasks.
- Save tasks to keep track of progress.


### **Projects user with**
![Screenshot (109)](https://github.com/user-attachments/assets/9d5ead07-08ce-4e7c-b05e-907e923e3090)

- User can see the projects he is on.
- Leave projects.
- See members of every project he is on


---

## Tech Stack

### **Frontend**
- React JS `Material UI for styling`
- Tailwind css `is an open-source CSS framework. Unlike other frameworks, like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables. Instead, it creates a list of "utility" CSS classes that can be used to style each element by mixing and matching.`
- Redux


### **Backend**
- Laravel `PHP Framework`
- JWT Authentication for secure API access

### **Database**
- Mysql

---



## Installation

### Prerequisites
- Node.js and npm
- Composer
- PHP 8.1+
- MySQL
- XAMPP or Laravel Valet (optional for local development)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/sofyanBoukir/Task-master.git
   cd Task-Master

2. Set up the backend
   ```bash
   cd back-end
   composer install
   cp .env.example .env
   php artisan key:generate
   php artisan migrate --seed
   php artisan serve

   
3. Set up the frontend:
   ```bash
   cd front-end
   npm install
   npm run dev

4. Open your browser and go
   ```bash
   frontend: http://localhost:5173
   backend: http://localhost:8000/api
