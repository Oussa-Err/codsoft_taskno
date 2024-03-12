# Jobify server

## Description:

Jobify Server is the backend application of job board platform. It handles user authentication, job CRUD operations, file upload and email notifications.

## Technologies Used:

**Backend Framework**: Express.js
**Database**: MongoDB
**Authentication/Authorization**: JWT
**Middleware**: Multer for handling multipart/form-data
**Email Sending**: Nodemailer
**Deployment**: Cyclic

## Quick Start

Follow these steps to get started with Jobify backend:

1. Clone the repository:

```bash
git clone https://github.com/Oussa-Err/codsoft_taskno.git
```

2. Navigate to the project directory:

```bash
cd Job_board
```

3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file in the backend folder of the project with the following variables:

```env
# Set the environment mode (production or development)
NODE_ENV=development

# Your JWT private key for token encryption
JWT_PRIVATE_KEY=my_secret_key

# Your MongoDB connection string
MONGOOSE_STR=mongodb://localhost:27017/jobify

# Email address for Nodemailer
MAILER_ADDRESS=example@example.com

# Password for the email address used by Nodemailer
MAILER_PWD=your_email_password

# Port on which the server will run
PORT=8080
```

5. Start the development server:

```bash
npm run dev
```

6. Open your browser and visit http://localhost:8080
