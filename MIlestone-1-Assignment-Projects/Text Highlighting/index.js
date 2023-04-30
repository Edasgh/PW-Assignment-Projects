const paraGraphs = document.querySelectorAll("p");
const whiteSpace = "";
paraGraphs.forEach((paraGraph) => {
  let paraGraphContent = paraGraph.innerText;

  if (paraGraphContent.length > 8) {
    paraGraph.style.backgroundColor = "yellow";
  }
  console.log(paraGraphContent.length);
});
