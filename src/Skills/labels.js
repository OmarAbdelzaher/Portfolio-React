import React  from "react";

class Labels extends React.Component {
    constructor(){
        super();
    }

    render(){
        const { list } = this.props;
        return (
        <>  
            {list.map((i,index)=>{
                return(
                    <label key={index}>{i}</label>
                )   
            })}
        </>
       );
    }
}

export default Labels;