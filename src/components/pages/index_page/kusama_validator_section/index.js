import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { stashDisplay } from '../../../../utils/display'
import classNames from 'classnames';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Identicon from '@polkadot/react-identicon';
import mcLogo from '../../../../assets/momo_and_coco.svg';
import dodoLogo from '../../../../assets/dodo.svg';
import totoLogo from '../../../../assets/toto.svg';
import kusamaLogo from '../../../../assets/kusama_logo.svg';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles'

const MOMO_STASH = "GA7j1FHWXpEU4kavowEte6LWR3NgZ8bkv4spWa9joiQF5R2"
const COCO_STASH = "FZsMKYHoQG1dAVhXBMyC7aYFYpASoBrrMYsAn1gJJUAueZX"
const DODO_STASH = "FUu6iSzpfStHnbtbzFy2gsnBLttwNgNSULSCQCgMjPfkYwF"
const TOTO_STASH = "GwJweN3Q8VjBMkd2wWLQsgMXrwmFLD6ihfS146GkmiYg5gw"

class KusamaValidatorSection extends Component {

  rootRef = React.createRef();

  componentDidMount() {
    const {scrollHere} = this.props
    if (scrollHere) {
      this.rootRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
    }
  }

  componentDidUpdate(prevProps) {
    const {scrollHere} = this.props
    if (scrollHere && prevProps.scrollHere !== scrollHere) {
      this.rootRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
    }
  }

  render() {
    const { classes, classNameRoot } = this.props;
    
    return (
      <Box className={!classNameRoot ? classes.root : classNameRoot} ref={this.rootRef}>
        <Grid container className={classes.container}>
          <Grid item xs={12} sm={8} className={classes.itemGrid}>
            <Grid container>
              <Grid item xs={12}>
                <Box className={classes.mascotBox}>
                  <Box className={classes.namesBox}>
                    <Box className={classes.nameBox}>
                      <Typography
                          variant="h2"
                          color="textPrimary"
                          align="left"
                          className={classes.nameTitle}
                        >MOMO
                      </Typography>
                      <Box className={classNames(classes.nameBase, classes.momoColor)} />
                    </Box>
                    <Typography
                        variant="h2"
                        color="textPrimary"
                        align="left"
                        className={classes.plus}
                      >+
                    </Typography>
                    <Box className={classes.nameBox}>
                      <Typography
                          variant="h2"
                          color="textPrimary"
                          align="left"
                        >COCO
                      </Typography>
                      <Box className={classNames(classes.nameBase, classes.cocoColor)} />
                    </Box>
                  </Box>
                  <Box className={classes.logoBox}>
                    <img src={mcLogo} className={classes.logo} alt={"Momo + Coco Kusama Validators"}/>
                  </Box>
                </Box>
                </Grid>
                <Grid xs={6}>
                  <Box className={classes.mascotBox}>
                    <Box className={classes.namesBox}>
                      <Box className={classes.nameBox}>
                        <Typography
                            variant="h2"
                            color="textPrimary"
                            align="left"
                            className={classes.nameTitle}
                          >DODO
                        </Typography>
                        <Box className={classNames(classes.nameBase, classes.momoColor)} />
                      </Box>
                    </Box>
                    <Box className={classes.logoBox}>
                      <img src={dodoLogo} 
                        style={{height: 256}}
                        className={classes.logo} alt={"DODO Validator"}/>
                    </Box>
                  </Box>
                </Grid>
                <Grid xs={6}>
                <Box className={classes.mascotBox}>
                    <Box className={classes.namesBox}>
                      <Box className={classes.nameBox}>
                        <Typography
                            variant="h2"
                            color="textPrimary"
                            align="left"
                            className={classes.nameTitle}
                          >TOTO
                        </Typography>
                        <Box className={classNames(classes.nameBase, classes.momoColor)} />
                      </Box>
                    </Box>
                    <Box className={classes.logoBox}>
                      <img src={totoLogo} 
                        style={{height: 256}}
                        className={classes.logo} alt={"TOTO Validator"}/>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
          </Grid>
          <Grid item xs={12} sm={4} className={classes.itemGrid}> 
            <Box className={classes.descriptionBox}>
              <Typography
                  variant="h4"
                  color="textSecondary"
                  align="left"
                  paragraph
                >Stake with TurboFlakes
              </Typography>
              <Typography
                  variant="body1"
                  color="textSecondary"
                  align="left"
                  gutterBottom
                ><b>Momo + Coco</b> are our non-identical Validator twins, <b>Dodo</b> and <b>Toto</b> are our newest addition to the family running in the Kusama Network.
              </Typography>
              <Typography
                  variant="body1"
                  color="textSecondary"
                  align="left"
                  paragraph
                >All our validators share the same <b>10%</b> commission and on all you get instant rewards every era - payouts are ensured by <b>CRUNCH</b>.
              </Typography>
              <Typography
                  variant="body1"
                  color="textSecondary"
                  align="left"
                >Nominate <b>Momo</b>, <b>Coco</b>, <b>Dodo</b> or <b>Toto</b>.
              </Typography>
              <Box className={classes.ident}>
                <Identicon
                  value={MOMO_STASH}
                  size={32}
                  theme={'polkadot'} />
                <Typography
                  variant="caption"
                  className={classes.inline}
                  color="textSecondary"
                  align="left"
                >{stashDisplay(MOMO_STASH)} <br/>TURBOFLAKES.IO/<b>MOMO</b>
                </Typography>
              </Box>
              <Box className={classes.ident}>
                <Identicon
                  value={COCO_STASH}
                  size={32}
                  theme={'polkadot'} />
                <Typography
                  variant="caption"
                  className={classes.inline}
                  color="textSecondary"
                  align="left"
                >{stashDisplay(COCO_STASH)} <br/>TURBOFLAKES.IO/<b>COCO</b>
                </Typography>
              </Box>
              <Box className={classes.ident}>
                <Identicon
                  value={DODO_STASH}
                  size={32}
                  theme={'polkadot'} />
                <Typography
                  variant="caption"
                  className={classes.inline}
                  color="textSecondary"
                  align="left"
                >{stashDisplay(DODO_STASH)} <br/>TURBOFLAKES.IO/<b>DODO</b>
                </Typography>
              </Box>
              <Box className={classes.ident}>
                <Identicon
                  value={TOTO_STASH}
                  size={32}
                  theme={'polkadot'} />
                <Typography
                  variant="caption"
                  className={classes.inline}
                  color="textSecondary"
                  align="left"
                >{stashDisplay(TOTO_STASH)} <br/>TURBOFLAKES.IO/<b>TOTO</b>
                </Typography>
              </Box>
              <Box className={classes.polkadotLogoBox}>
                <img src={kusamaLogo} className={classes.polkadotLogo} alt={"Kusama Network"}/>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box> 
    )
  }
}

KusamaValidatorSection.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(KusamaValidatorSection);