/* =========================================
In JavaScript, you can throw an error using the throw statement. This is often used to handle exceptional cases or unexpected conditions in your code. When an error is thrown, the normal flow of the program is interrupted, and control is passed to the nearest catch block if available.
============================================*/

const getTodos = async () => {
  const response = await fetch("todos/luigi.json");
  if (response.status !== 200) {
    throw new Error("CANNOT FETCH THE DATA");
  }
  const data = await response.json();

  return data;
};
getTodos()
  .then((data) => console.log("resolved", data))
  .catch((err) => console.log("rejected:", err.message));
