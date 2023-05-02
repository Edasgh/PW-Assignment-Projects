//getting all the paragraphs
const paraGraphs = document.querySelectorAll("p");
// select each paragraph from all the paragraphs
paraGraphs.forEach((paraGraph) => {
  let paraGraphContent = paraGraph.innerText; // getting the innerText of each paragraph

  if (paraGraphContent.length > 8) {
    //highlight the paragraph if it's character length is greater than 8
    paraGraph.style.backgroundColor = "yellow";
  }

});
