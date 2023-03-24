import './index.css'

const GetItem = props => {
  const {Item, onButton} = props
  const {suggestion, id} = Item
  const onButtonOf = () => {
    onButton(id)
  }
  return (
    <li className="card">
      <p>{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="image3"
        onClick={onButtonOf}
      />
    </li>
  )
}

export default GetItem
