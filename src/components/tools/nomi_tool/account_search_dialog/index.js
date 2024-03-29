import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { selectAddress } from '../../actions/leaderboard'
import { selectors } from '../../selectors'
import { isValidAddress, addressSS58 } from '../../utils/crypto'
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import ArrowForward from '@material-ui/icons/ArrowForward';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles'

function Transition(props) {
  return <Slide direction="left" {...props} />;
}

class AccountSearchDialog extends Component {

  state = {
    address: ""
  }

  handleClose = () => {
    this.setState({ address: "" });
    this.props.onClose();
  };

  handleChange = event => {
    this.setState({ address: event.target.value });
  };

  changeParams = (query, value) => {
		const {history} = this.props
		query.set("a", value)
		const location = {
			search: `?${query.toString()}`
		}
		history.replace(location)
	}

  handleSubmit = (e) => {
    e.preventDefault()
    const {address} = this.state
    if (isValidAddress(address)) {
      const {location} = this.props
		  let query = new URLSearchParams(location.search)
		  this.changeParams(query, address)
      this.props.selectAddress(addressSS58(address))
      this.handleClose()
    }
  };

  render() {
    const { classes, isFetching, open } = this.props;

    return (
      <div className={classes.root}>
        <Dialog
          fullScreen
          open={open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
          classes={{
            paperFullScreen: classes.paperFullScreen
          }}
          >
          <DialogContent classes={{ root: classes.contentRoot }}>
            <Container >
              <IconButton aria-label="Close" color="secondary" className={classes.closeIcon} onClick={this.handleClose}>
                <CloseIcon />
              </IconButton>
              <form className={classes.form} noValidate autoComplete="off"
                onSubmit={this.handleSubmit}>
                <Typography variant="h6" color="textSecondary" align="left" gutterBottom>
                Search for a Validator address in the current Leaderboard
                </Typography>
                <TextField
                  variant="outlined"
                  fullWidth
                  autoFocus
                  disabled={isFetching}
                  value={this.state.address}
                  onChange={this.handleChange}
                  error={!isValidAddress(this.state.address) && !!this.state.address}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={this.handleSubmit} color="primary" 
                          disabled={!isValidAddress(this.state.address) && !!this.state.address}>
                          <ArrowForward />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
              />
              </form>
            </Container>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

AccountSearchDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const account = selectors.getObjectByEntityAndId(state, 'validator', ownProps.id)
  return {
    account,
    isFetching: !!state.fetchers.async,
  }
}

export default connect(mapStateToProps, {selectAddress})(withRouter(withStyles(styles)(AccountSearchDialog)));