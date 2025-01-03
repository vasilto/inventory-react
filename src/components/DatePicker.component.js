import React from 'react';
import {DatePicker} from 'react-rainbow-components';
import './style.css';

export default class DatePickerComponent extends React.Component {
	state = {
		date: new Date()
	}
	 
	render() {
		return (
			<div className="rainbow-p-vertical_small rainbow-p-horizontal_xx-small rainbow-m-horizontal_xx-large">
				<DatePicker
					id="DatePicker"
					value={this.state.date}
					label={this.props.label}
					onChange={value => this.setState({ date: value })} 
					name={this.props.name}
					locale="en-US"
					disabled={this.props.disabled}
					/>
			</div>
		)
	}
}