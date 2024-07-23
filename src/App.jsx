import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/Sidebar";

function App() {

  const [projectsState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  function handleStartAddProject(){
    setProjectState(prevState =>{
      return{
        ...prevState,
        selectedProjectId: null,

      };
    });
  }

  function handleAddProject(projecData){
    setProjectState((prevState) =>
      {
        const newProject={
          ...projecData,
          id:Math.random()
        }
      return{
        ...prevState,
        selectedProjectId: undefined,
        projects:[...prevState.projects,newProject]
      }
    })
  }

  let content;

    if(projectsState.selectedProjectId === null)
    {
    content = <NewProject onAdd={handleAddProject}/>
    }else if(projectsState.selectedProjectId === undefined)
      {
      content = <NoProjectSelected onStartAdd={handleStartAddProject}/>
      }


  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar 
      onStartAdd={handleStartAddProject}
       projects={projectsState.projects}/>
      {content}
    </main>
  );
}

export default App;
