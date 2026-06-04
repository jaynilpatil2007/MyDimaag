import NotesCard from "./components/ui/NotesCard"

function App() {
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <NotesCard 
          type="keyPoints"
          title="Atomic habits -key takeaways" 
          content={"Started with 10 min box breathing. Felt grounded and clear. Intention for today: stay present, avoid reactive responses."}
          tags={["Wellness"]}
          time="yesterday"    
        />
      </div>
    </>
  )
}

export default App
