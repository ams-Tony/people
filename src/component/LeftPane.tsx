import * as React from 'react';
import { connect } from 'react-redux';
import { some as _some,
  includes as _includes, 
  map as _map, 
  difference as _difference } from 'lodash';

import { setActiveUser, reqToDeleteUser } from '../service/action';
import Checkbox from './CheckBox';
interface IntProps {
  allData?: Array<any>
}
interface IntState {
  selectedUser: Array<any>
}
class LeftPane extends React.Component<IntProps, IntState>{
  state = {
    selectedUser: null
  }

  private handleSelect = (user: any) => {
    this.setState({ selectedUser: this.handleSelection(this.state.selectedUser, user) })
  }

  private handleSelection = (available: any, value: any) => {
    let availableSelection = available;
    if (availableSelection) {
      _some(availableSelection, value)
        ? availableSelection = _difference(availableSelection, [value])
        : availableSelection.push(value)
    } else {
      availableSelection = [value];
    }
    return availableSelection;
  }
  render() {
    const { allData } = this.props;
    const { selectedUser } = this.state;
    
    return (<aside>
      <div className="sideMenu">
          <div className="peopleDiv">
          <Checkbox image={null} onClick={null}  name='all' id='all' label="People"
            checked={allData === selectedUser}
            onChange={
              () => this.setState({ 
                selectedUser: (selectedUser && selectedUser.length
                  ? null
                  : allData)
                })
              } />
          <img
            style={{ position: 'absolute', top: '17px', right: '0'}}
            onClick={() => reqToDeleteUser(selectedUser)}
            src='src/common/images/rubbish-bin.png'/>
          </div>

          <ul className="listOfPeoples">
            {allData.map((each, i) =>
              <Checkbox key={i}
                image={each.img ? each.img : 'src/common/images/user.png' }
                onClick={()=> setActiveUser(each)}
                checked={_includes(selectedUser, each)}
                name={each.name}
                id={each.name} 
                label={each.name} 
                onChange={() => this.handleSelect(each)} />
              )}
          </ul>
      </div>
    </aside>)
  }
}
const mapStateToProps = (state) => ({
  allData: state.allData,
})

export default connect(mapStateToProps, null)(LeftPane);