import { useEffect, useState } from "react";
// the useDebounce hook
import useDebounce from "./useDebounce";
// the repos component
import Repos from "./Repos/Repos";

function App() {
  //searchTerm and the results state
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  //debouncing the searchTerm on a 500ms delay
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  //the fetchData function to fetch an user's information
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/search/users?q=${debouncedSearchTerm}`
      );
      const data = await response.json();
      setResults(data.items);
    } catch (error) {
      console.error("Error fetching data from GitHub API:", error);
    }
  };

  //if the searchTerm is debounced then, fetch the data otherwise, set the results array to an empty array
  useEffect(() => {
    if (debouncedSearchTerm) {
      fetchData();
    } else {
      setResults([]);
    }
  }, [debouncedSearchTerm]);

  return (
    <>
      {/* the app container contains the heading, input field and the results container */}
      <div className="App-container">
        <h2>Github User Finder</h2>
        <input
          type="text"
          placeholder="Search GitHub users"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {/* results-container contains the user details and the repos-container */}
        <div className="container results-container">
          {results.length !== 0 ? (
            results.map((user) => (
              <div key={user.id} className="user-info">
                <a
                  href={`${user.html_url}`}
                  target="_blank"
                  title={`View ${user.login}'s github profile`}
                >
                  <div className="user-avatar-container">
                    <img
                      className="user-pic"
                      src={user.avatar_url}
                      alt={user.login}
                    />
                    <p className="user-name" title={`Username : ${user.login}`}>
                      {user.login}
                    </p>
                  </div>
                </a>

                {/* button to show or hide the repos */}
                <button
                  id={`see-repos-${user.id}`}
                  className="see-repos"
                  onClick={() => {
                    let repoDiv = document.getElementById(`repos-${user.id}`);
                    let seeRepoBtn = document.getElementById(
                      `see-repos-${user.id}`
                    );
                    if (repoDiv.style.display === "none") {
                      repoDiv.style.display = "flex";
                      seeRepoBtn.textContent = "Hide Repos";
                    } else {
                      repoDiv.style.display = "none";
                      seeRepoBtn.textContent = "Show Repos";
                    }
                  }}
                >
                  Show Repos
                </button>

                {/*  fetch repos of a specific user  */}
                <Repos user={user} />
              </div>
            ))
          ) : (
            <>
              {searchTerm === "" ? (
                <p className="label">{`Type to search an user`}</p>
              ) : (
                <p className="label">{`No results found for the query : "${searchTerm}"`}</p>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
