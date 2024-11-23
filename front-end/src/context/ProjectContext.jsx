import { Children, createContext, useState } from "react"


const ProjectContext = createContext();
export const ProjectProvider = () => {
    const [project,setProject] = useState({});

  return (
    <ProjectContext.Provider value={{project}}>
        {Children}
    </ProjectContext.Provider>
  )
}
