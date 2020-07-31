import React from 'react'


export default props =>
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>filhos</h2>
        <ul>
            
            {

                React.Children.map(props.children, child =>{
                    React.cloneElement(child, {
                        ...props, ...child.props
                    })
                })   
                
            }
        </ul>
    </div>