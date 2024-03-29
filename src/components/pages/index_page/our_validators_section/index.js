import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles'

class OurValidatorsSection extends Component {

  handle1KVExt = () => {
		window.open('https://thousand-validators.kusama.network/#/leaderboard/FZsMKYHoQG1dAVhXBMyC7aYFYpASoBrrMYsAn1gJJUAueZX', '_blank')
	}

  render() {
    const { classes } = this.props;
    
    return (  
      <Box className={classes.root} >
        <Grid container className={classes.container}>
          <Grid item xs={12} sm={8}>
            <Typography
            variant="h3"
            color="textSecondary"
            align="left"
            paragraph
            >Our Validators</Typography>
            <Typography
            variant="body1"
            color="textSecondary"
            align="left"
            paragraph
            >
            Validators are one big piece of the puzzle in the Polkadot and Kusama network. Their role is to ensure that the Relay Chain stays secure by staking <i>DOT</i> or <i>KSM</i>. These participants are critical in producing new blocks in the consensus mechanism with other validators and verifying that the information contained in the Parachain blocks is valid.
            </Typography>
            <Typography
            variant="body1"
            color="textSecondary"
            align="left"
            paragraph
            >
            <b>TurboFlakes's</b> Polkadot and Kusama validators are independent nodes running on different regions of the world. They run on dedicated and high performance servers with high availability. As a standard practice, we have backup nodes for each validator on the network. Each backup node runs under the same configuration as the other active validator nodes. And to be secure and reliable, our validators setup follows all Polkadot validation <Link href="https://wiki.polkadot.network/docs/maintain-guides-how-to-validate-polkadot" 
            target="_blank" rel="noreferrer" color="inherit" 
            className={classes.link}>best practices</Link>.
            </Typography>
            <Typography
            variant="body1"
            color="textSecondary"
            align="left"
            paragraph
            >
            We have been validating on the Kusama network since January 2021 and on Polkadot since June 2021. We are also eligible for the Kusama Thousand Validators Programme and recently we also joined <Link href="https://polkadot.network/blog/supporting-decentralization-join-the-polkadot-thousand-validators-programme" 
            target="_blank" rel="noreferrer" color="inherit" 
            className={classes.link}>Polkadot Thousand Validators Programme</Link> through a Good Intention evaluation case.
            </Typography>
            <Typography
            variant="body1"
            color="textSecondary"
            align="left"
            paragraph
            >
            Our IT professional background experience gives us the confidence needed to turn our top-notch infrastructure as reliable as possible, so that you - Nominators - can trust and feel confident that your stake is safe by nominating our validators.
            </Typography>
            <Typography
            variant="body1"
            color="textSecondary"
            align="left"
            paragraph
            >
            Meet Raiden and Momo + Coco. 
            {/* <IconButton 
              color="inherit"
              size="small"
              aria-label="Menu">
              <ArrowRightIcon color="inherit" /></IconButton> */}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    )
  }
}

OurValidatorsSection.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OurValidatorsSection);