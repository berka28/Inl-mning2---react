import React from 'react'
import Figure from '../components/Figure'

const FigureCatalog = ({ figures, setFigures }) => {
    
    if(figures.length === 0 ) { 
        return (
            <div id="figure-catalog" className="mb-5 text-center " >
                No figures found, please add a figure.
            </div>
        )
    }
    
    
    return (
        <div id="figure-catalog" className="mb-5" >
            
            {
                figures.map( figure => (
                    <Figure key={figure.id} figure={figure} figures={figures} setFigures={setFigures} />
                ))
            }

        </div>
    )
}

export default FigureCatalog
