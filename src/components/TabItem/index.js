import './index.css'

const TabItem = props => {
  const {tabDetails, updatedActiveId, isactive} = props
  const {displayText, tabId} = tabDetails

  console.log(isactive)

  const ClickButtonTab = () => {
    updatedActiveId(tabId)
  }
  const activeTabClassName = isactive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabClassName}`}
        onClick={ClickButtonTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
