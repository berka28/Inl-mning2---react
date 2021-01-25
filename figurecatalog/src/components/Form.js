import React, {useState} from 'react'
import uuid from 'react-uuid'


const Form = ({ figures, setFigures }) => {
    
    const [name, setName] = useState('')
    const [series, setSeries] = useState('')

    const nameHandler = (e) => {
        setName(e.target.value)
    }

    const seriesHandler = (e) => {
        setSeries(e.target.value)
    }
    
    const submitHandler = (e) => {
        e.preventDefault()
        setFigures([ ...figures, { name: name, series: series, inStock: true, id: uuid()}])
        setName('')
        setSeries('')
    }
    
    return (
        <form>
            <div className="mb-3">
                <input onChange={nameHandler} value={name} type="text" className="form-control" placeholder="Name"/>
            </div>
            <div className="mb-3">
                <textarea onChange={seriesHandler} value={series} className="form-control" rows="3" placeholder="Series"></textarea>
            </div>
            <div className="mb-3">
                <button onClick={submitHandler} type="submit" className="btn btn-primary w-100 p-3" >Add Figure</button>
            </div>
        </form>
    )
}

export default Form
