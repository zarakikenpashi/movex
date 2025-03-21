
import Siderbar from "./components/Sidebar/Siderbar"
import Workspace from "./components/Workspace/Workspace"

const App = () => {
  return (
    <div className="h-screen overflow-hidden grid grid-rows-[60px_1fr] lg:grid-rows-none lg:grid-cols-[250px_1fr] ">
      <Siderbar />
      <Workspace />
    </div>
  )
}

export default App