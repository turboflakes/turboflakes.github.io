import React, {Component} from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { changeQuantity } from '../../../../actions/leaderboard'
import { parseInt } from '../../../../utils/math'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Slider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles'

// const marks = [
//   {
//     value: 8,
//     label: '',
//   },
//   {
//     value: 16,
//     label: '',
//   },
//   {
//     value: 24,
//     label: '',
//   },
//   {
//     value: 32,
//     label: '',
//   },
// 	{
//     value: 64,
//     label: '',
//   },
// ];

const MAX_QUANTITY = 128;

class QuantitySlider extends Component {

	constructor(props) {
		super(props);

		let query = new URLSearchParams(props.location.search)
		let quantity = parseInt(query.get("n"))
		quantity = quantity > 0 && quantity <= MAX_QUANTITY ? quantity : 24
		this.changeParams(query, quantity)
		this.state = { value: quantity }
	}

	changeParams = (query, value) => {
		const {history} = this.props
		query.set("n", value)
		const location = {
			search: `?${query.toString()}`
		}
		history.replace(location)
	}

	componentDidMount() {
		const {value} = this.props
		if (this.state.value !== value) {
			this.props.changeQuantity(this.state.value)
		}
	}
	
	handleOnChangeCommitted = (_event, value) => {
		const {location} = this.props
		let query = new URLSearchParams(location.search)
		this.changeParams(query, value)
		this.props.changeQuantity(value)
	}

 	render() {
		const { classes, value } = this.props;
		// TODO: We should include here how many validators we rank based on the filters defined
		return (
			<div className={classes.root}>
				<Box className={classes.sliderBox}>
					<Typography variant="body2" color="textSecondary" align="left"
						className={classes.title}>
						Quantity
					</Typography>
					<Slider
						className={classes.slider}
						defaultValue={this.state.value}
						getAriaValueText={() => value}
						color="primary"
						valueLabelDisplay="on"
						step={8}
						min={8}
						max={64}
						// marks={marks}
						onChangeCommitted={this.handleOnChangeCommitted}
					/>
				</Box>
			</div>
		)
	}
}

QuantitySlider.propTypes = {
	classes: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
	return {
		value: state.leaderboard.quantity,
		isFetching: !!state.fetchers.async,
  }
}

export default connect(mapStateToProps, { changeQuantity })(withRouter(withStyles(styles)(QuantitySlider)));
  