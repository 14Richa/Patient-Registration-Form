# Patient Registration Form

This project is a web application built using React for the frontend, Django for the backend, and PostgreSQL for the database. The application allows users to register as patients by filling out a form with their information.

## Setup Instructions

To run this project locally, follow these steps:

1. Clone the repository to your local machine:
```
git clone git@github.com:14Richa/Patient-Readmission-Analysis.git
```
2. Navigate into the project directory:
```
cd patient-registration-form
```
3. Install dependencies:
```
npm install
```
4. Start Frontend: 
```
npm start
```

### Backend Setup

For the backend setup, follow these steps:

1. Navigate to the backend directory:
```
cd backend
```
2. Activate the virtual environment (venv):
```
source venv/bin/activate
```
3.  Make migrations after going to myproject directory
```
python manage.py makemigrations
python manage.py migrate
```
4. Run the Django server:
```
python manage.py runserver
```
