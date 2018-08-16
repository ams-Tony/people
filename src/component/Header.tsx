import * as React from 'react';

interface IntProps {
  onAddClick: () => void
}
class Header extends React.Component<IntProps, {}> {
  render() {
    const { onAddClick } = this.props;
    return(<header>
      <div className="headerbg">
        <div className="container-fluid">
        <a className="addIcon" onClick={onAddClick}>
          <img src="src/common/images/add-button.png"/>
        </a>
        </div>
      </div>
    </header>)
  }
}
export default Header;