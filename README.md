## Movie Listing Application

This is a **Single Page Application (SPA)** built using **React** that allows users to search, filter, and view detailed information about movies using the **OMDb API**.

### Features

- **Movie Listing**: Movies are displayed in a table/grid with the following columns:
  - Name
  - Release Date
  - IMDb ID
- **Pagination**: Movies are paginated with 10 movies per page.
- **Search**: A search bar allows users to search for movies by name. The default search is set to "Pokemon".
- **Filter by Year**: Users can filter movies by a specific release year.
- **Filter by Type**: Users can filter movies by type:
  - Movies
  - TV Series
  - TV Episodes
- **Movie Details**: Users can click on a movie to view its poster and additional details such as:
  - Title
  - Duration
  - Genre
  - Director
  - Cast
  - IMDb Rating

### Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Redux**: State management library to manage the application state.
- **OMDb API**: API for fetching movie data.
- **Axios**: Promise-based HTTP client to interact with APIs.
- **Material UI**: React component library for UI components like buttons, grids, and forms.
- **SASS/SCSS**: For styling the application.

### Prerequisites

Before running the application, make sure you have the following installed:

- **Node.js** (version 12.x or higher)
- **npm** (or **yarn**)

### Setup Instructions

To get the application up and running, clone the repository, navigate to the project folder, install dependencies, and set up your environment variables:

```bash
git clone https://github.com/your-username/movie-listing-app.git
cd movie-listing-app
yarn install
echo "REACT_APP_OMDB_API_KEY=e605e5ba" > .env
yarn start
