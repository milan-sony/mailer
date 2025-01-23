# Mailer

A simple yet flexible email automation platform using the MERN stack that can be customized based on the needs of the company. The platform allows for creating, managing, and automating email campaigns while being able to adapt to different use cases and business requirements

## Prerequisite

`node version: >=18.0.0 <22.11.0`

`npm version: >=8.0.0 <10.9.0`

> 💡 You can use `nvm` to install multiple node versions on your machine [Read about nvm](Read about nvm)

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
