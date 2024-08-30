---

# SportsEase

## Live Link
https://sports-facility-booking-platform-client.vercel.app/


## Introduction

It is a platform for booking sports facilities. Users can easily book sports facilities on this website. Administrators have full control over the platform.

## Project Description

It is a platform for booking sports facilities. This website aims to provide users with sports facilities without any complexity. Users can book any facility with one click.

## Features

- Users can book a facility.
- users can cancel a booking.
- users can see their bookings.
- Admin can CRUD with facility.
- Admin can see all bookings.
- Admin can create admin account.

## Technology Stack
- React.
- Redux-Toolkit.
- Ant Desighn.
- Tailwind.
- Exxpress.js.
- MongoDB.

## Installation Guideline

- Clone git repository.
- Then follow installation steps bellow.

### Installation Steps

- run following command line by line:
```bash
$ npm i
$ npm run dev
```

### Prerequisites

- Node.js
### Configuration

1. Create a `.env` file in the root directory of the project.
2. Add necessary configuration variables in the `.env` file.
   Example:
   ```bash
    VITE_IMGBB_API_KEY=Your_ImgBB_Api_Key
    VITE_BASE_UR=http://localhost:5000/api
   ```

## Usage
- Clone server and client git repo .
```
client : https://github.com/mdsayel111/sports_facility_booking_platform_client
server: https://github.com/mdsayel111/sports_facility_booking_platform_client
```
- run install command . 
```
$ npm install
```
- Add .env file:
   - client:
    ```
    VITE_IMGBB_API_KEY=Your_ImgBB_Api_Key
    VITE_BASE_UR=http://localhost:5000/api
    ```
    - server:
    ```
    SALT=10
    SECRET_KEY=Your_Secret_Key_To_hash_Password
    DB_USER_NAME=Your_DB_User_Name
    DB_PASSWORD=Your_DB_Password
    DB_URL=your_DB_Url
    ```
- Then run following command for both (client and server) for run locally:
```
$ npm run dev
```