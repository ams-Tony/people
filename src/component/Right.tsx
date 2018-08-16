import * as React from 'react';
import { connect } from 'react-redux';

interface IntProps {
	activeUser?: any
}
class Right extends React.Component<IntProps, {}> {
  render() {
		const { activeUser } = this.props;
		return (activeUser
		? <div className="main-content">
			<div className="container-fluid">
				<div className="contentDiv">
					<img src={activeUser.img}/>
					<div className="informShow">
						<div className="form-group formShow">
							<label className="labelName">Name</label>
							<input type="text" disabled value={activeUser.name} className="inputVal"/>
						</div>
						<div className="form-group formShow">
							<label  className="labelName">Id</label>
							<input type="text" disabled value={activeUser.id} className="inputVal"/>
						</div>
						<div className="form-group formShow">
							<label  className="labelName">Description</label>
							<input type="text" disabled value={activeUser.Description} className="inputVal"/>
						</div>
						
					</div>
				</div>
				
			</div>
		</div> :<div className="container-fluid" style={{ paddingLeft: '300px'}}>
			nothing selected
		</div>

		)
  }
}
const mapStateToProps = (state) => ({
  activeUser: state.activeUser,
})

export default connect(mapStateToProps, null)(Right);