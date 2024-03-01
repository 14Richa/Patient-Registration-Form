# Patient Registration Form

This project is a web application prototype built using React for the frontend, and Django for the backend. The application allows users to register as patients by filling out a form with their information.

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
3. Navigate to myproject direction and install dependencies
```
pip install -r requirements.txt
```

4.  Make migrations
```
python manage.py makemigrations
python manage.py migrate
```
5. Run the Django server:
```
python manage.py runserver
```

## Additional Notes

This project serves as a prototype for a touchless website. The touchless functionality is intended to be implemented using [Leap Motion Controller](https://leap2.ultraleap.com/leap-motion-controller-2/) technology. Future enhancements include integrating an on-screen keyboard to enable users to input data without physically touching the keyboard or screen, thus minimizing the risk of infection and promoting Human-Computer Interaction.
