import {Component} from 'react'

import './index.css'

class EditableText extends Component {
  state = {isSaved: false, text: ''}

  onClickSave = () => {
    this.setState({isSaved: true})
  }

  onClickEdit = () => {
    this.setState({isSaved: false})
  }

  onChangeText = event => {
    this.setState({text: event.target.value})
  }

  render() {
    const {isSaved, text} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1>Editable Text Input</h1>
          {isSaved ? (
            <div className="input-values">
              <p>{text}</p>
              <button onClick={this.onClickEdit} type="button">
                Edit
              </button>
            </div>
          ) : (
            <div>
              <input value={text} onChange={this.onChangeText} type="text" />
              <button onClick={this.onClickSave} type="button">
                Save
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default EditableText
