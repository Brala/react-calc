import React from 'react';
import { useSelector } from 'react-redux';
import './Button.css';
// import UniqueID from 'react-html-id';

const Buttons = () => {
    const buttons = useSelector(state => state.buttons)

    console.log(buttons)
    return (
            <div className="calculator--buttons">
                {buttons.buttons.map((button, index)=>{
                    return(
                        <button 
                            key={index}// 'this.nextUniqueId()'
                            id={button.htmlID}
                            name={button.name}
                            className={button.className}
                            onClick={() => this.props.handleClick(button.name)}
                            >
                                {button.name}
                        </button>
                    )})
                }
            </div>
    )
}

// LoadButtons()

// class Buttons extends Component {
//     constructor() {
//         super()
//         UniqueID.enableUniqueIds(this)
//     }
//     render(props) {
//         // const buttons = useSelector(state => state.buttons)
//         return (
//                 <LoadButtons />
//             <div className="calculator--buttons">
//                 {this.props.buttons.buttons.map((button, index)=>{
//                     return(
//                         <button 
//                             key={this.nextUniqueId()}
//                             id={button.htmlID}
//                             name={button.name}
//                             className={button.className}
//                             onClick={() => this.props.handleClick(button.name)}
//                             >
//                                 {button.name}
//                         </button>
//                     )})
//                 }
//                 {/* {console.log(this.props)  } */}
//             </div>
//         )
//     }
// }

// const mapStateToProps = state => ({
//     buttons: state.buttons
// })
// export default connect(mapStateToProps, {}) (Buttons)
export default Buttons