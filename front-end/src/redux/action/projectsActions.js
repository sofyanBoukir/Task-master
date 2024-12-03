import { exitProject, getProjectsUserWith } from "../../services/projectService";

export const fetchProjects = (token) => async (dispatch) => {
  dispatch({ type: "REQUEST_SENDED" });
  try {
    const response = await getProjectsUserWith(token);
    if (response.data.projectsExists) {
      dispatch({ type: "REQUEST_SUCCESS_WITH_PROJECTS", payload: response.data.projects });
    } else {
      dispatch({ type: "REQUEST_SENDED_WITH_ERROR", payload: "No projects found" });
    }
  } catch (error) {
    dispatch({ type: "REQUEST_SENDED_WITH_ERROR", payload: error.message });
  }
};

export const exitAProject = (token,projectId) => async (dispatch) =>{
  dispatch({type:"DELETING"});
  try {
    const response = await exitProject(token,projectId);

    if(response.data.exited){ 
      const updatedProjectsResponse = await getProjectsUserWith(token);

      if (updatedProjectsResponse.data.projectsExists) {
        dispatch({ type: "REQUEST_SUCCESS_WITH_PROJECTS", payload: updatedProjectsResponse.data.projects });
      } else {
        dispatch({ type: "REQUEST_SENDED_WITH_ERROR", payload: "No projects found" });
        dispatch({ type: "EXIT_PROJECT", payload: [] });
      }
    }else{
      dispatch({ type: "REQUEST_SENDED_WITH_ERROR", payload: "An error occured" });
    }
  } catch (error) {
    dispatch({ type: "REQUEST_SENDED_WITH_ERROR", payload: error.message });
  }
}