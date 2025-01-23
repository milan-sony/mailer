# Mailer

A simple yet flexible and easy-to-use email automation platform built with the MERN stack (MongoDB, Express.js, React, Node.js). It helps businesses to easily create, manage, and automate email campaigns with features like personalized content, scheduling, and system integration. Users can save time by creating reusable email templates for recurring tasks, reducing manual work and mistakes. The platform is designed to improve productivity, consistency, and scalability, making it suitable for different business needs

## Prerequisite

`node version: >=18.0.0 <22.11.0`

`npm version: >=8.0.0 <10.9.0`

> 💡 You can use `nvm` to install multiple node versions on your machine [Read about nvm](https://stackoverflow.com/questions/53785383/how-to-change-node-js-version-with-nvm)

## Run locally

Clone the project

```
git clone https://github.com/milan-sony/mailer.git
```

Go to the project directory

```
cd mailer
```

## Frontend

```
cd frontend
```

Install dependencies

```
npm install
```

Setup environment veriables

###### Under the root directory (frontend folder) make a file named `.env` and add the following environment variables

```
VITE_APP_API_URL = http://localhost:3000/api/v1
```

Run the project

```
npm run dev
```

## Backend

```
cd backend
```

Install dependencies

```
npm install
```

Setup environment veriables

###### Under the root directory (backend folder) make a file named `.env` and add the following environment variables

```
PORT = 3000

SMTP_HOST = smtp.gmail.com
SMTP_PORT = 587
SMTP_MAIL = name@domain.com
SMTP_APP_PASSWORD = your app password
```

Run the project

```
npm run dev
```

## Tech Stack

**Client:** React, Zustand, TailwindCSS

**Server:** Node, Express, Nodemailer

## Used By

This project is used by the following companies:

- Uniware Technologies

## Feedback

If you have any feedback, please reach me out at milansonyofficial@gmail.com
