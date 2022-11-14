import React from 'react'

const Main = () => {
    return (
        <>
            <div className="full flexJCC row">
                <div className="w40 p3">
                    <form className="row flexAIC flexSB line p3" style={{ borderRadius: "22px",marginBottom: "20px" }}>
                        <input type="text" className="w80" placeholder='ADD' />
                        <button type="submit" style={{ background: "transparent" }}>Submit</button>
                    </form>
                    <li className="full row flexAIC flexSB linebottom m2" >
                        <div className="row flexAIC w80 m2">
                            <input type="checkbox" classname="full" name="" id="" />
                            <p className="m2">safdsdfsd</p>
                        </div>
                        <button style={{ padding: "4% 2%", borderRadius: "50%" }}>Delete</button>
                    </li>
                    <li className="full row flexAIC flexSB linebottom m2">
                        <div className="row flexAIC w80 m2">
                            <input type="checkbox" classname="full" name="" id="" />
                            <p className="m2">safdsdfsd</p>
                        </div>
                        <button style={{ padding: "4% 2%", borderRadius: "50%" }}>Delete</button>
                    </li>
                </div>

            </div>
        </>
    )
}

export default Main