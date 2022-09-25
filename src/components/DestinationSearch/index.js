// Write your code here
import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem/index'

class DestinationSearch extends Component {
  state = {searchInputValue: ''}

  onChangeSearchInput = event => {
    const {searchInputValue} = this.state
    this.setState({searchInputValue: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInputValue} = this.state
    const searchResults = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInputValue.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="top-header">
          <h1>Destination Search</h1>
          <div className="searchBox">
            <input
              type="search"
              placeholder="Search"
              onChange={this.onChangeSearchInput}
              value={searchInputValue}
              className="search"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="searchImg"
            />
          </div>
        </div>
        <ul className="unorderList">
          {searchResults.map(eachList => (
            <DestinationItem eachList={eachList} key={eachList.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
