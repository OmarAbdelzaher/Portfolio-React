import React from "react";
import { ProgressBar } from "react-bootstrap";

class Progressbar extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { list } = this.props;
    return (
      <>
        {/* {list.map((i,index)=>{
                return(
                    <label key={index}>{i.skill}</label>
                )   
            })} */}

        {list.map((i, index) => {
          return (
            // <label key={index}>{i.skill}</label>,
            <ProgressBar
              className="mt-2"
              key={index}
              animated
              variant="info"
              now={i.percent}
              label={`${i.percent}%`}
            />
          );
        })}
      </>
    );
  }
}

export default Progressbar;
