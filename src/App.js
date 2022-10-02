import './App.css';
import {useEffect, useState} from "react";
import Body from "./Body";

function App() {
    const [pause, setPause] = useState(false) // boolean
    const [arr, setArr] = useState([
        {id: 0, x: 10, y: 10, r: 20, color: "red"},
        {id: 1, x: 100, y: 120, r: 40, color: "blue"}
    ])
    const [bodies, setBodies] = useState([])


    const generate = () => {
        const generated = []
        for (let i = 0; i < arr.length; ++i) {
            generated.push(<Body key={i} id={i} x={propX(i)} y={propY(i)} r={propR(i)} color={propC(i)} pause={pause}/>)
        }
        setBodies(generated)
    }
    useEffect(generate, [])


    const updateBody = t => {
        const newArr = [...arr]
        const index = arr.findIndex(a => a.id === t)
        newArr[index].x += 2
        newArr[index].y += 1
        setArr(newArr)
    } // todo physics

    const [timeGone, setTimeGone] = useState(0)
    useEffect(() => {
        const timer = setTimeout(() => {
            if (!pause) {
                for (let i = 0; i < arr.length; ++i) updateBody(i)
                generate()
                setTimeGone(timeGone + 1)
                console.log(bodies)
            }
        }, 1e2)
        return () => clearTimeout(timer)
    }, [timeGone, pause])

    const prop = id => arr[id]
    const propX = id => prop(id).x
    const propY = id => prop(id).y
    const propR = id => prop(id).r
    const propC = id => prop(id).color


    return (
        <div>
            <ul>
                {bodies}
            </ul>
            <div>
                <button onClick={() => setPause(!pause)}>Pause</button>
            </div>
        </div>
    );
}

export default App;
