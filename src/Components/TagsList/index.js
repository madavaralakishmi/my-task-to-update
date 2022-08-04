import './index.css'

const TagsList = props => {
  const {details, onButtonClicked} = props
  const {displayText} = details

  const onClicked = () => {
    onButtonClicked(displayText)
  }

  return (
    <li>
      <button type="button" className="button" onClick={onClicked}>
        {displayText}
      </button>
    </li>
  )
}

export default TagsList
