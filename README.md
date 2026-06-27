# Portfolio Backend API

REST API for managing portfolio projects and contact messages | Portfolio loyihalarini va aloqa xabarlarini boshqarish uchun REST API.

## Features | Imkoniyatlar

* Create new projects | Yangi loyihalar qo'shish
* Get all projects | Barcha loyihalarni olish
* Get project by ID | Loyihani ID orqali olish
* Update existing projects | Mavjud loyihalarni yangilash
* Delete projects | Loyihalarni o'chirish
* Send contact messages directly to email | Xabarlarni to'g'ridan-to'g'ri emailga yuborish
* MongoDB database integration | MongoDB ma'lumotlar bazasi integratsiyasi
* Environment variables support | Muhit o'zgaruvchilari qo'llab-quvvatlanadi

## Technologies | Texnologiyalar

* Node.js
* Express.js
* MongoDB
* Mongoose
* Nodemailer
* Gmail SMTP
* Dotenv
* CORS

## Project Structure | Loyiha tuzilishi

```text
src/
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── app.js
└── server.js
```

## API Endpoints | API manzillari

| Method | Endpoint          | Description                    | Tavsif                        |
| ------ | ----------------- | ------------------------------ | ----------------------------- |
| GET    | /api/projects     | Get all projects               | Barcha loyihalarni olish      |
| GET    | /api/projects/:id | Get project by ID              | Loyihani ID orqali olish      |
| POST   | /api/projects     | Create new project             | Yangi loyiha yaratish         |
| PUT    | /api/projects/:id | Update project                 | Loyihani yangilash            |
| DELETE | /api/projects/:id | Delete project                 | Loyihani o'chirish            |
| POST   | /api/contact      | Send contact message via email | Xabarni email orqali yuborish |

## API Testing Screenshots | API test rasmlari

### Create Project | Loyiha yaratish

![Create Project](./screenshots/01-create-project.png)

### Get All Projects | Barcha loyihalarni olish

![Get All Projects](./screenshots/02-get-all-projects.png)

### Update Project | Loyihani yangilash

![Update Project](./screenshots/03-update-project.png)

### Delete Project | Loyihani o'chirish

![Delete Project](./screenshots/04-delete-project.png)

### Contact API Success | Contact API muvaffaqiyatli javobi

![Contact API Success](./screenshots/05-contact-api-success.png)

### Email Notification | Email xabari

![Email Notification](./screenshots/06-email-notification.png)

## Installation | O'rnatish

```bash
npm install
```

## Run Project | Loyihani ishga tushirish

```bash
npm start
```

## Environment Variables | Muhit o'zgaruvchilari

Create a `.env` file and add the following variables | `.env` fayl yarating va quyidagi o'zgaruvchilarni qo'shing:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string

EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_google_app_password
```

## Author | Muallif

Davron Jurayev
