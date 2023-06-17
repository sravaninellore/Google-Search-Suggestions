// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionItem, functionName} = props
  const {suggestion} = suggestionItem

  const clickSuggestion = () => functionName(suggestion)

  return (
    <li className="suggestion-container">
      <p className="suggestion">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow"
        onClick={clickSuggestion}
      />
    </li>
  )
}

export default SuggestionItem
