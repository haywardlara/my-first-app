import { useState, useEffect } from "react"

function Play() {
  const c1 = '#473CF8'
  const c2 = '#3456D9'
  const c3 = '#4695EF'
  const c4 = '#34ACD9'
  const c5 = '#3CF7F8'

  const [timer, setTimer] = useState(0)
  const [colours, setColours] = useState([c1, c2, c3, c4, c5])
  const [active, setActive] = useState(false)

  useEffect(() => {
      let interval = null
      if(active){
        interval = setInterval(() => {
            setTimer((timer) => timer + 1)
            setColours((colours) => [colours[4], colours[0], colours[1], colours[2], colours[3]])
          }, 1000)
      } else {
          clearInterval(interval)
      }
      return () => clearInterval(interval)
  }, [active, timer])


  const clickHandler = () => {
      setActive(active => !active)
  }

  const resetClickHandler = () => {
      setTimer(timer => 0)
      if(active){
          setActive(active => !active)
      }
  }

  return (
    <div className="Play">
      <h1>It's Simple</h1>
      {console.log(colours)}

      {active ? <button onClick={clickHandler}>stop</button> : <button onClick={clickHandler}>start</button> }
      <button onClick={resetClickHandler}>reset</button>

      <p>Timer: {timer}</p>
      <div className="boxes">
        <div className="box" style={{ backgroundColor: `${colours[0]}` }}></div>
        <div className="box" style={{ backgroundColor: `${colours[1]}` }}></div>
        <div className="box" style={{ backgroundColor: `${colours[2]}` }}></div>
        <div className="box" style={{ backgroundColor: `${colours[3]}` }}></div>
        <div className="box" style={{ backgroundColor: `${colours[4]}` }}></div>
      </div>
    </div>
  )
}

export default Play
