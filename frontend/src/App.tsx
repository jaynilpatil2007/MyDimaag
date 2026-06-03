import Button from "./components/ui/Button"
import { PlusIcon } from "./Icons/PlusIcon"
import { ShareIcon } from "./Icons/ShareIcon"

function App() {
  return (
    <>
      <div className="flex justify-end gap-5">
        <Button variants="secondary" startIcon={<ShareIcon size="md"/>} size="md" text="Share" onClick={() => {console.log("Hello")}}/>
        <Button variants="primary" startIcon={<PlusIcon size="md"/>} size="md" text="Add Document" onClick={() => {console.log("Hello")}}/>
      </div>
    </>
  )
}

export default App
