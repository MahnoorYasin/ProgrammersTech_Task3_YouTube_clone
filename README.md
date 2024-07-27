<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
=======
# YouTube Clone Project

Welcome to the YouTube Clone project! This project is an attempt to recreate the core features of the popular video-sharing platform YouTube using modern web technologies. The project is built with React and Vite, offering a seamless development experience with Hot Module Replacement (HMR) and optimized builds.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

The YouTube Clone project aims to simulate a simplified version of YouTube's interface and functionality. It allows users to search for videos, view video details, and interact with video content. This project is an excellent opportunity for developers to understand how to work with React and Vite to build scalable and efficient web applications.

## Features

- **Video Search**: Search for videos using the YouTube API.
- **Responsive Design**: Ensures a great user experience on both desktop and mobile devices.
- **Video Player**: Play videos directly within the application.
- **Video Details**: View detailed information about each video, including title, description, and related videos.
- **Modern UI**: Clean and user-friendly interface inspired by YouTube's design.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A modern frontend build tool that provides fast development and optimized production builds.
- **CSS3**: Used for styling the application.
- **Axios**: For making API calls to the YouTube Data API.
- **React Router**: For handling navigation within the application.
- **YouTube Data API**: For fetching video data.

## Installation

To get started with the YouTube Clone project, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/MahnoorYasin/ProgrammersTech_Task3_YouTube_clone.git
   cd ProgrammersTech_Task3_YouTube_clone
   ```

2. **Install Dependencies**

   Ensure you have Node.js installed. Then, run the following command to install the required dependencies:

   ```bash
   npm install
   ```

3. **Set Up API Key**

   Create a `.env` file in the root of the project and add your YouTube Data API key:

   ```env
   VITE_YOUTUBE_API_KEY=your_api_key_here
   ```

   Replace `your_api_key_here` with your actual YouTube Data API key.

4. **Run the Application**

   Start the development server:

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`.

## Usage

Once the application is running, you can perform the following actions:

- **Search for Videos**: Use the search bar to find videos.
- **View Video Details**: Click on a video to view more information and play it.
- **Explore Related Videos**: Discover related content through the video detail page.

## File Structure

Here's an overview of the project's file structure:

```
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── Navbar.js
│   │   ├── SearchBar.js
│   │   ├── VideoList.js
│   │   ├── VideoItem.js
│   │   └── VideoDetail.js
│   ├── pages
│   │   ├── Home.js
│   │   ├── VideoPlayer.js
│   │   └── NotFound.js
│   ├── App.js
│   ├── index.js
│   ├── App.css
│   ├── index.css
│   └── utils
│       └── api.js
├── .env
├── package.json
└── vite.config.js
```

### Key Directories

- **`components`**: Contains reusable UI components such as `Navbar`, `SearchBar`, and `VideoDetail`.
- **`pages`**: Defines the main pages like `Home`, `VideoPlayer`, and `NotFound`.
- **`utils`**: Includes helper functions and API integration.
