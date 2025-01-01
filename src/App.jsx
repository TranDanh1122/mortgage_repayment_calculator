import "./styles.css"
import Form from "./components/form/Form"
import Total from "./components/total/Total"
function App() {

  return (
    <>
      <div className="flex flex-nowrap item-center justify-start w-full max-w-[1000px] mb:w-[90%] bg-white mb:flex-col mb:gap-4">
        <Form></Form>
        <Total></Total>
      </div>

    </>
  )
}

export default App
