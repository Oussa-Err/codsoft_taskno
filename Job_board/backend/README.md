# Jobify Backend

## Description:

Jobify Backend is the server-side application that powers the Jobify job board platform. It's responsible for handling user authentication, managing job listings, file uploads for resumes, and sending email notifications.

## Technologies Used:

    Backend Framework: Express.js
    Database: MongoDB
    Authentication/Authorization: JWT (JSON Web Token)
    Middleware: Multer (for handling multipart/form-data uploads)
    Email Sending: Nodemailer with SMTP
    Deployment: Previously deployed on Cyclic, now deployed on AWS Lambda (Updated!)

## Quick Start:

Here's how to get started with the Jobify backend:

Clone the Repository:
```bash
git clone https://github.com/Oussa-Err/codsoft_taskno.git
```
Navigate to the Project Directory:
```bash
cd Job_board
```
Install Dependencies:
```bash
npm install
```
Configure Environment Variables:
- Create a .env file in the backend folder and fill it with the following variables:

- NODE_ENV: Set the environment mode (e.g., development, production).
- JWT_PRIVATE_KEY: Your secret key used for JWT token encryption.
- MONGOOSE_STR: Your MongoDB connection string (update if using a different database).
- MAILER_ADDRESS: Email address used by Nodemailer (update if using a different email).
- MAILER_PWD: Password for the email address used by Nodemailer.
- PORT: Port on which the server will run (default: 8080).

Start the Development Server (Optional):
If you want to run the backend locally for development purposes:
```bash
npm run dev
```
This will start the server and you can access it at http://localhost:8080 (or the port specified in .env).

Deployment on AWS Lambda:

The deployment instructions for AWS Lambda are not included in this README. However, consult the project's documentation or contact the developers for specific instructions on deploying the backend to AWS Lambda.