import {Component} from 'react'

import GetItem from './index2'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeItems = event => {
    const searchVal = event.target.value
    this.setState({searchInput: searchVal})
  }

  onButton = props => {
    const {suggestionsList} = this.props
    const newArr = suggestionsList.filter(each => each.id === props)
    const item = newArr[0]
    const {suggestion} = item
    this.setState({searchInput: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResults = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="image1"
        />
        <div className="full-card">
          <div className="input-cont">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="image2"
            />
            <input
              type="search"
              className="input"
              placeholder="Search Google"
              onChange={this.onChangeItems}
              value={searchInput}
            />
          </div>
          <ul>
            {searchResults.map(each => (
              <GetItem Item={each} key={each.id} onButton={this.onButton} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
