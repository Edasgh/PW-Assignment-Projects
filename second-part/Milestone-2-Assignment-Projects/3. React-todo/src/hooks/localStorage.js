// functions to load , save and remove todos

export const loadTodos = () => {
  try {
    const stringifiedArray = localStorage.getItem("todos");
    return JSON.parse(stringifiedArray);
  } catch (err) {
    return err;
  }
};

export const saveTodo = (item) => {
  try {
    let todosArray = loadTodos();
    todosArray = todosArray ? todosArray : [];
    console.log(todosArray);
    todosArray.push(item);

    localStorage.setItem("todos", JSON.stringify(todosArray));
    window.location.reload();
  } catch (err) {
    return err;
  }
};


export const removeTodo=(id)=>{
  let todosArray = loadTodos();
  todosArray.splice(id,1)
  localStorage.setItem("todos", JSON.stringify(todosArray));
  window.location.reload();



}
