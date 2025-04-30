import NavBar from "./components/nav"
import Footer from "./components/Footer"
import MAIN from "./components/MAIN"

function App() {
  

  let data = [
    {
      title: "First",
      discription: "This is my first Discription"
    },
    {
      title: "Second",
      discription: "This is my Second Discription"
    },
    {
      title: "Third",
      discription: "This is my Third Discription"
    }
    
  ]

  return (
    <>
      <NavBar />
      <div className="center">
        {
          data.map((e) => (

            <MAIN title={e.title} discription={e.discription} />
          ))
        }

      </div>
      <Footer />

    </>
  )
}

export default App
