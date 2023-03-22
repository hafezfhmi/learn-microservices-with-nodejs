import axios from "axios";
const URL = "https://jsonplaceholder.typicode.com/todos/1";

axios.get(URL).then((res) => {
  const todo = res.data;

  const ID = todo.ID;
  const title = todo.Title;
  const finished = todo.finished;

  console.log(`
    The Todo with ID: ${ID}
    Has a title of: ${title}
    Is it finished? ${finished}
  `);
});
