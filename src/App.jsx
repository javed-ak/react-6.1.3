function App() {

  return (
    <>
      <CardWrapper>
        <div>Hii there</div> 
      </CardWrapper>
      <CardWrapper>
        <div>Hii Javed</div> 
      </CardWrapper>
    </>
  )
  
  function CardWrapper({children}) {
    return <div style={{border:".5px solid black", margin: "10px", padding: "10px", "box-shadow": "2px 2px 2px 2px rgba(0, 0, 0, 0.1)"}}>
      {children}
    </div>

  }
}

export default App
