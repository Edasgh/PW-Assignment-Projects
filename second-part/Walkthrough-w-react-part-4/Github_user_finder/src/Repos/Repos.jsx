import React, { useEffect, useState } from "react";

const Repos = ({ url }) => {
  // take an url from the user's data to fetch repos

  //repos state;
  const [repos, setRepos] = useState([]);

  //fetchRepos function to fetch repos from the given url
  async function fetchRepos() {
    try {
      const res = await fetch(url);
      const data = await res.json();
      // set the empty repos state as the recieved repos array
      setRepos(data);
    } catch (error) {
      console.error("Error fetching data from GitHub API:", error);
    }
  }

  //useEffect to fetch the repos only when the url exists. Otherwise, set an empty array as repos state
  useEffect(() => {
    if (url) {
      fetchRepos();
    } else {
      setRepos([]);
    }
  }, [url]);

  return (
    <>
      {/* if repos array has any repo then, show the repos */}
      {repos.length !== 0 &&
        repos.map((repo) => (
          <a href={`${repo.html_url}`} target="_blank" key={repo.id}>
            <button className="single-repo">{repo.name}</button>
          </a>
        ))}
    </>
  );
};

export default Repos;
