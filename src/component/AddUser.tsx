import * as  React from 'react';

interface IntProps {
  onAdd: (val: any)=> void,
  hideMe: ()=> void
}
interface IntState {
  name: string,
  id: string,
  Description: string,
}

class AddUser extends React.Component<IntProps, IntState> {
  state = {
    name: '',
    id: '',
    Description: '',
  }

  private actionOnAdd = () => {
    this.props.onAdd(this.state)
  }
  private handleChangeValues = (e: any) => {
    this.setState({
      ...this.state,
      [e.target.name] : e.target.value
    })
  }
  render() {
    const { hideMe } = this.props;
    const { id, name, Description } = this.state;
    return(
    <div className="modale opened">
      <div className="modal-dialog"
        style={{
          width: '600px',
          left: '40%',
          top: '25%'
        }}>
        <div className="modal-header">
            <a className="btn-close closemodale" onClick={hideMe}>&times;</a>
        </div>
        <div className="modal-body">
          <div>
            <div className="container-fluid">
              <div className="contentDiv">
                <img src='src/common/images/user.png' />
                <div className="informShow">
                  <div style={{ width: '420px' }} className="form-group formShow">
                    <label className="labelName">Name</label>
                    <input name="name" type="text" value={name} onChange={this.handleChangeValues} className="inputVal"/>
                  </div>
                  <div style={{ width: '420px' }} className="form-group formShow">
                    <label  className="labelName">Id</label>
                    <input name="id" type="text" value={id} onChange={this.handleChangeValues} className="inputVal"/>
                  </div>
                  <div style={{ width: '420px' }} className="form-group formShow">
                    <label  className="labelName">Description</label>
                    <input name="Description" type="text" value={Description} onChange={this.handleChangeValues} className="inputVal"/>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <a className="btn" onClick={this.actionOnAdd}>Add User
            </a>
          </div>
        </div>
      </div>
    </div>
  )
  }
}

export default AddUser