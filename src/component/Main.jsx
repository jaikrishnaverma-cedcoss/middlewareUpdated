import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addkar, DeleteTodo, loadKar } from './redux/Actions'
const Main = () => {
    const inpuRef = useRef(null)
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    useEffect(() => {
        dispatch(loadKar())
    }, [])
    const Submitted = (e) => {
        e.preventDefault()
        dispatch(addkar(state.data, e.target.title.value))
        // console.log(  inpuRef.current.focus())
        e.target.reset()
    }

    if (state.error !== '')
        return <div className="full flexJCC flexAIC col" style={{ minHeight: "100vh" }}><img src="Error.gif" width="200px"></img><h1>{state.error.message}</h1></div>

    if (state.loading)
        return <div className="full flexJCC flexAIC row" style={{ minHeight: "100vh" }}><img src="Iphone-spinner-2.gif" width="200px"></img></div>
   
        return (
         <>
            <div className="full flexJCC row">
                <div className="w40 p3 line m1 brd body">
                    <form className="row flexAIC flexSB line p3" onSubmit={Submitted} style={{ borderRadius: "22px", marginBottom: "20px", paddingLeft: "20px" }}>
                        <input type="text" ref={inpuRef} className="w80 fnt" placeholder='ADD' name="title" />
                        <button type="submit" style={{ background: "transparent" }}>Submit</button>
                    </form>
                    {
                        state.data.map((x, i) => <li className=" row flexAIC flexSB linebottom m2" >
                            <div className="row flexAIC w80 m2">
                                <input type="checkbox" classname="full" name="" id="" checked={x.completed} />
                                <p className="m2 fnt">{x.title}</p>
                            </div>
                            <button onClick={() => dispatch(DeleteTodo(i))} style={{ padding: "4% 2%", borderRadius: "50%" }}>Delete</button>
                        </li>)
                    }
                </div>
            </div>
        </>
    )
}

export default Main