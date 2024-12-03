
export const handleUnsave = (taskId) => {
    return {type:"unsaveTask",taskId:taskId}
};

export const saveNewTask = (newTask) => {
    return {type:"saveTask",newTask:newTask}
};