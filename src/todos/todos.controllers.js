const todoDB = [
  {
    id: 1,
    title: "Hacer Tareas",
    description:"Tarea de matematicas" ,
    finish: false,
    deadline: "2022-07-31"
  },
];

const getAllTasks = () => {
  return todoDB;
};

const getTaskById = (id) => {
  const filteredDB = todoDB.filter((task) => task.id === id);
  return filteredDB[0];
};

const createTask = (taskObj) => {
  if (todoDB.length === 0) {
    const newTask = {
      id: 1,
      title: taskObj.title,
      description: taskObj.description,
      finish: taskObj.finish,
      deadline: taskObj.deadline
      
    };
    todoDB.push(newTask);
    return newTask;
  }
  const newTask = {
    id: todoDB[todoDB.length - 1].id + 1,
    title: taskObj.title,
      description: taskObj.description,
      finish: taskObj.finish,
      deadline: taskObj.deadline
  };
  todoDB.push(newTask);
  return newTask;
};

const deleteTask = (id) => {
  const index = todoDB.findIndex((item) => item.id === id);
  if (index !== -1){
    todoDB.splice(index, 1)
    return true
  }
  return false
}

const editTask = (id, data) => {
  const index = todoDB.findIndex((item) => item.id === id);
  if (index !== -1){
    todoDB[index] = data
    return todoDB[index]
  } else {
    createTask(data)
    return todoDB.at(-1)
  }
}

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  deleteTask,
  editTask
};
