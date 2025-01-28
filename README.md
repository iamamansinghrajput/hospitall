# HealthTrack Application

## Overview
HealthTrack is a comprehensive medical record management system built using the MERN stack. It enables users to create accounts, upload and access their medical reports, and seamlessly manage healthcare data. The platform also provides a dedicated doctor panel where doctors can review patient reports, update existing ones, and create new medical records.

## Features

### User Features
- **User Account Management:** Secure user registration and login system.
- **Medical Report Upload:** Users can upload and store their medical reports.
- **Access Medical Reports:** View and download uploaded reports.

### Doctor Panel Features
- **Patient Report Management:** View and manage reports for assigned patients.
- **Create New Reports:** Generate new reports for patients.
- **Update Reports:** Modify existing patient reports.

### Additional Features
- **Secure Authentication:** Token-based authentication using JWT.
- **Role-Based Access:** Different functionalities for users and doctors.
- **Responsive Design:** User-friendly and fully responsive interface.
- **Database Integration:** Persistent data storage using MongoDB.

## Technologies Used
- **Frontend:** React, TailwindCSS, Material-UI, React Icons
- **Backend:** Node.js, Express
- **Authentication:** JWT, bcrypt
- **Routing:** React Router
- **Database:** MongoDB (with Mongoose for schema modeling)

## Installation

### Prerequisites
- Node.js installed on your system.
- MongoDB instance running locally or on a cloud platform like MongoDB Atlas.

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-github-username/HealthTrack.git
   ```
2. Navigate to the backend directory:
   ```bash
   cd HealthTrackBackend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Configure environment variables in a `.env` file:
   ```env
   MONGO_URI=mongodb://<username>:<password>@<cluster-address>/<database-name>
   JWT_SECRET=your_jwt_secret
   ```
5. Start the backend server:
   ```bash
   node app.js
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd HealthTrackFrontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend server:
   ```bash
   npm run dev
   ```

## Usage
1. Visit [http://localhost:5173](http://localhost:5173) to access the application.
2. Register or log in to your account.
3. Users can upload and view their medical reports.
4. Doctors can log in to manage and update patient reports.

## Screenshots

### Dashboard
![Screenshot 2025-01-28 120950](https://github.com/user-attachments/assets/6d6a3c8c-8a2d-4b90-bb13-ac98ae35c024)



### User Medical Reports
![Screenshot 2025-01-28 115708](https://github.com/user-attachments/assets/b01c2119-e27b-4e90-afcc-d4de171e9eaa)




### Login Page
![Screenshot 2025-01-28 115600](https://github.com/user-attachments/assets/ca2de77e-1cd9-47a9-a90c-30f4d07332ad)


## Contributing
1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add a new feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Create a Pull Request.

## Contact
For any inquiries or suggestions, feel free to reach out:

- **Email:** singhaman2321@gmail.com
- **GitHub:** https://github.com/iamamansinghrajput

Thank you for checking out the HealthTrack application!

