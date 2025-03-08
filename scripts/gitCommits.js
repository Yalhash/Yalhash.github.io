// Grab the link to github from the project page.
var gitSplitLink = $("a:contains('Github Page')")[0].getAttribute("href").split('/');
// Extract the username and repo name from the link
const username = gitSplitLink[gitSplitLink.length - 2];
const repo = gitSplitLink[gitSplitLink.length - 1];

// Make an AJAX request to the Github API to fetch the most recent commits for the specified repository
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://api.github.com/repos/${username}/${repo}/commits`);
xhr.onload = function() {
  if (xhr.status === 200) {
    // get the commits in JSON form
    const commits = JSON.parse(xhr.responseText);
    // Not bothering to add a case for 0 commits since there must at least be an init commit, 
    // and I wouldn't add a completely empty project to the website.

    // Fetch the first 10 or the entire list of commits
    for (var i = 0; i < 10 && i < commits.length; i++) {
      // Create a new entry in the commit table:
      var newRow = $("<tr>");
      // Create a new data cell in the new row
      var newData = $("<td>");
      // Create a link to the commit with the message as the text
      var newLink = $("<a>").attr("href", commits[i].html_url);
      newLink.text(commits[i].commit.message)

      // Construct the object to add
      newData.append(newLink);
      newRow.append(newData);
      // Add these tags to the table
      $("table").append(newRow);
    }
  } else {
    // Error message, hopefully never happens.
    var newRow = $("<tr>");
    // Create a new data cell in the new row
    var newData = $("<td>");
    // Create the error message
    var newLink = $("<a>");
    newLink.text("Unable to fetch data from Github API, try again later.")
    newData.append(newLink);
    newRow.append(newData);
    // Add these tags to the table
    $("table").append(newRow);
    console.error(`Request failed. Returned status of ${xhr.status}`);
  }
};
xhr.send();

