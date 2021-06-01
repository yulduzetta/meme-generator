import ToDoItem from "./ToDoItem";
const ToDoList = () => {
  return (
    <>
      <h3>Here is your TODO list</h3>
      <div className='todo-list'>
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
      </div>
    </>
  );
};

export default ToDoList;
