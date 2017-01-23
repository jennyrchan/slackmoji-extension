import React, {Component} from 'react';
import {connect} from 'react-redux';

class AddOwnEmoji extends Component {
  constructor(props) {
    super(props);

    const { addOwnEmoji } = props;
    this.state = { addOwnEmoji };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ addOwnEmoji: false })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Create emoji here"
          />
        <div>
          <button type="submit" className="btn btn-primary btn-xs">Submit</button>
        </div>
        </form>
      </div>
    )
  }

}


const mapStateToProps = state => {
  return {
    addOwnEmoji: state.addOwnEmoji
  }
};

export default connect(mapStateToProps)(AddOwnEmoji);

// function AddOwnEmoji (props) {

//   // const { handleClick } = props;

//   return (
//     <div>
//       <a href="#" >
//         <h4>Click here</h4>
//       </a>
//     </div>
//   );

// }
