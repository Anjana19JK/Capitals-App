import {Component} from 'react'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {
    active: countryAndCapitalsList[0].capitalDisplayText,
  }

  selectState = event => {
    this.setState({active: event.target.value})
  }

  setActiveId = id => {
    this.setState({
      active: id,
    })
  }

  render() {
    const {active} = this.state
    return (
      <div>
        <div>
          <h1>Countries and Capitals</h1>
          <div>
            <select value={active} onChange={this.selectState}>
              <option>
                {searchResult.map(eachItem => eachItem.capitalDisplayText)}
              </option>
            </select>
            <p>is capital of which country?</p>
          </div>
          {}
        </div>
      </div>
    )
  }
}

export default Capitals
