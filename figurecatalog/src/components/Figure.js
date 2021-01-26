import React from 'react'

const Figure = ({ figure, figures, setFigures }) => {


    const inStockHandler = () =>{
        setFigures(figures.map(item => {
            if(item.id === figure.id) {
                return {
                    ...item, inStock: !item.inStock
                }
            }

            return item
        }))
    }

    const deleteHandler = () => {
        setFigures(figures.filter(item => item.id !== figure.id))
    }


 
    return (
        <div  className="border mb-3 p-2">
            <div className="d-flex justify-content-between align-items-center">
                <div  className={`${ figure.inStock ? 'text-black' : 'out-of-stock' }`}>
                    <div className="name" >{figure.name}</div>
                    <div className="series" >{figure.series}</div>
                </div>
                <div>
                    <i onClick={inStockHandler} className={`fas fa-box cursor-pointer ${ figure.inStock ? 'in-stock' : 'out-of-stock' }`}></i>
                    <i onClick={deleteHandler} className="fas fa-trash cursor-pointer"></i>
                </div>
            </div>
        </div>
    )
}

export default Figure
