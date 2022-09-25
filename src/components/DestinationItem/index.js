// Write your code here
import './index.css'

const DestinationItem = props => {
  const {eachList} = props
  const {imgUrl, name} = eachList
  return (
    <li className="lists">
      <img src={imgUrl} alt={name} className="images" />
      <p className="names">{name}</p>
    </li>
  )
}

export default DestinationItem
