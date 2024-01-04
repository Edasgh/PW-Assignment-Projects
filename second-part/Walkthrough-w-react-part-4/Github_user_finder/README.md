# GitHub User Avatar Finder Web App

## Description:

This is an web application using React that allows users to input a GitHub username. Upon user input, the app displays the username, the avatar of the user and names of the repos fetched from the GitHub API. By clicking on the avatar of the user, the user's profile will be opened in a new tab. By clicking on the name of the repo, the repo will also be opened in the new tab. A Show/Hide repos button is also added o show or hide repo names as per one's preferrence. The app incorporates debouncing to enhance user experience and prevent excessive API calls. Debouncing is implemented here,by creating a custom hook called useDebounce.

### File & Folder Description :

1. "Repos" folder-->"Repos.jsx" : The "Repos" component recieves an (repos_url) url as a prop for fetching the names and details of a repo of a specified user.
2. "useDebounce.js": This is a custom hook for debouncing the fetching user process. Recieves a value and delay as parameters and return the debouncedValue to fetch data.
3. "App.jsx" : get a debounced searchTerm from the useDebounce hook passing searchTerm as value and 800ms delay. after getting the debounced searchTerm,import the "Repos" component and fetch the user details and the repos by passing the repos_url of a specific user as a prop to the "Repos" component

## Run locally: run the `npm run dev` command

# Live link : (will be updated sortly)
