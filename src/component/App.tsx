import * as React from 'react';
import { connect } from 'react-redux';
import * as $ from 'jquery';

import { getAllRecord, addUser } from './../service/action';
import Header from './Header';
import LeftPane from './LeftPane';
import Right from './Right';
import AddUser from './AddUser';
import './../common/style.css'
interface IntProps {
  allData?: any,
  activeUser?: any,
}
interface IntState {
  isAddUser: boolean
}
class Dashboard extends React.Component<IntProps, IntState>{

  state = {
    isAddUser: false
  }

  componentDidMount() {
    getAllRecord();
  }

  private handleAdd = (formValues: any) => {
    console.log('add..', formValues)
    addUser(formValues);
    this.setState({ isAddUser: false })
  }

  private handleAddUserModal = () => {
    this.setState({ isAddUser: true })
  }
  render() {
    const { isAddUser } = this.state;

    return (
      <div>
        <Header 
          onAddClick={this.handleAddUserModal}/>
        <LeftPane />
        <Right />
        {isAddUser && <AddUser
          hideMe={() => this.setState({ isAddUser: false })}
          onAdd={this.handleAdd} />}
</div>
    );
  }
}

const mapStateToProps = (state) => ({
  allData: state.allData,
  activeUser: state.activeUser,
})

export default connect(mapStateToProps, null)(Dashboard);
