# Quiz It Server

## Description

Quiz It Server is the backend application of the Quiz It platform, providing the necessary APIs and services to support the frontend client. It handles quiz creation, quiz taking. The server ensures secure data storage and management.

## Technologies Used:

- **Backend Framework**: Express.js
- **Database**: MongoDB
- **Deployment**: serveless netlify functions 

## Quick Start

Follow these steps to get started with app's server:

1. Clone the repository:

```bash
git clone https://github.com/Oussa-Err/codsoft_taskno.git
```

2. Navigate to the project directory:

```bash
cd Online_quiz_maker/backend
```

3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file in the backend folder of the project with the following variables:

```env
# Set the environment mode (production or development)
NODE_ENV=development

# Your MongoDB connection string
MONGO_URI_STR=mongodb://localhost:27017/quizApp
```

5. Start the development server:

```bash
npm run dev
```

6. Open your browser and visit http://localhost:3000
