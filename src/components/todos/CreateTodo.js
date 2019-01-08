import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateTodo extends Component {

  state = {
    text: ''
  }

  handleChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addTodo(this.state)
    // store.dispatch({type: 'ADD_TODO', text: this.state})
  }

  render() {
    console.log(this.state)
    return(
      <div>
        <form onSubmit={this.handleSubmit} >
          <p>
            <label>add todo</label>
            <input onChange={this.handleChange} type="text" value={this.state.text} />
          </p>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: todo => dispatch({ type: 'ADD_TODO', payload: todo })
  }
}

// export default connect(null, { addTodo })(CreateTodo)
export default connect(null, mapDispatchToProps)(CreateTodo)
