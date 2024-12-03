import { getProjectsUserWith } from "../../services/projectService";

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