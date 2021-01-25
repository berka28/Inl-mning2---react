import React, { useState } from 'react'
import Form from '../components/Form'
import FigureCatalog from '../components/FigureCatalog'


const Main = () => {
    const [figures, setFigures] = useState([])
    return (
        <main className="container mt-4" >
            <div className="row">
                <div className="col-5">
                    <Form figures={figures} setFigures={setFigures} />
                </div>
                <div className="col-7 ps-5">
                    <FigureCatalog/>
                </div>
            </div>
           
        </main>
    )
}

export default Main
