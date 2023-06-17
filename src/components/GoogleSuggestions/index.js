// Write your code here
import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchValue: ''}

  onSearch = event => this.setState({searchValue: event.target.value})

  onSuggestion = suggestion => this.setState({searchValue: suggestion})

  render() {
    const {suggestionsList} = this.props

    const {searchValue} = this.state

    const filteredSearchResults = suggestionsList.filter(suggestionItem =>
      suggestionItem.suggestion
        .toLowerCase()
        .includes(searchValue.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-logo"
        />
        <br />
        <div className="card-container">
          <div className="input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              type="search"
              placeholder="Search Google"
              className="search-input"
              onChange={this.onSearch}
              value={searchValue}
            />
          </div>
          <ul className="google-suggestions-container">
            {filteredSearchResults.map(suggestionItem => (
              <SuggestionItem
                suggestionItem={suggestionItem}
                key={suggestionItem.id}
                functionName={this.onSuggestion}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
