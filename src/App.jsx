import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/Sidebar";
import SelectedProject from "./components/SelectedProject";

function App() {

  const [projectsState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });

  function handleAddTask(text){
    setProjectState((prevState) =>
      {
        const newTask={
         text: text,
         projectId: prevState.selectedProjectId,
          id: Math.random()
        };

      return{
        ...prevState,
        tasks: [newTask, ...prevState.tasks]
      };
    })
  }

  function handleDeleteTask(id){
    setProjectState((prevState) =>{
      return{
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),

      };
    });
  }

  function handleSelectProject(id){
    setProjectState((prevState) =>{
      return{
        ...prevState,
        selectedProjectId: id,

      };
    });
  }

  function handleStartAddProject(){
    setProjectState(prevState =>{
      return{
        ...prevState,
        selectedProjectId: null,

      };
    });
  }

  function handleCancelAddProject(){
    setProjectState(prevState =>{
      return{
        ...prevState,
        selectedProjectId: undefined,

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

  function handleDeleteProject(id){
    setProjectState((prevState) =>{
      return{
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project) => 
        project.id !== prevState.selectedProjectId
      ),

      };
    });
  }

  const selectedProject = 
  projectsState.projects.find(project => project.id === projectsState.selectedProjectId);

  let content = 
    <SelectedProject 
        project={selectedProject} 
        onDelete={handleDeleteProject}
        onAddTask = {handleAddTask}
        onDeleteTask = {handleDeleteTask}
        tasks={projectsState.tasks}
    />;

  if(projectsState.selectedProjectId === null)
      {
      content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
      }
  else if(projectsState.selectedProjectId === undefined)
      {
      content = <NoProjectSelected onStartAdd={handleStartAddProject}/>
      }


  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar 
        onStartAdd={handleStartAddProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectsState.selectedProjectId}
        />
      {content}
    </main>
  );
}

export default App;
