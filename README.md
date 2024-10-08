# Country info Application Backend

This is the backend for our city listing and country details application. It's built with Node.js and Express, and use https://documenter.getpostman.com/ API

## Prerequisites

- Node.js (version 14 or higher)


## Installation

1. Clone this repository:
   ```
   git clone https://github.com/rodridega/countries-info-app.git
   cd server
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Usage

To start the server in production mode:

```
npm start
```

## Project Structure

- `src/` - Contains the source code
  - `controllers/` - Controllers to handle business logic
  - `routes/` - API route definitions
  - `index.js` - Main Express application configuration

## API Endpoints

- GET /api/ - Retrieves the list of all countries
- GET /api/:countryCode - Retrieves country info by country code



# Country info Application Frontend

This is the frontend for our country listing and country details application. It's built with React, using Tailwind CSS for styling, React router Dom to routing and axios for requests.

## Prerequisites

- Node.js (version 14 or higher)

## Installation

1. Clone this repository (if you haven't already):
   ```
   git clone https://github.com/rodridega/countries-info-app.git
   cd country-info-app
   ```

2. Install dependencies:
   ```
   npm install
   ```


## Usage

To start the development server:

```
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

## Project Structure

- `pages/` - Application pages
- `components/` - Reusable components
- `public/` - Static files
- `api/` - Api requests
- `layout/` - Layout to share with all app
- `types/` - interfaces of data from backend

## Main Pages

- `/` - Home page with the list of countries
- `/[countryCode]` - Details page for a specific country
