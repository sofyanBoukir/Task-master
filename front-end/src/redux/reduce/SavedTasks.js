const savedTasks = JSON.parse(localStorage.getItem("tasks"));

export const TaskReducer = (state=savedTasks,action) =>{
    switch(action.type){
        case "unsaveTask":
            const updatedTasks = state.filter((savedTask) => savedTask.id !== action.taskId);
            localStorage.setItem('tasks',JSON.stringify(updatedTasks));  
            return updatedTasks;
        
        case "saveTask":
            const newTasks = [...state,action.newTask];
            localStorage.setItem('tasks',JSON.stringify(newTasks))
            return newTasks;

        default:
            return state;
    }
}
