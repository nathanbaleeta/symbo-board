import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from "@material-ui/core/styles";
import AccountCircle from "@material-ui/icons/AccountCircle";
import SettingsIcon from "@material-ui/icons/Settings";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import PollIcon from "@material-ui/icons/Poll";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { Redirect } from "react-router-dom";

import { connect } from "react-redux";
import { logout } from "../../actions/auth/auth";

const styles = theme => ({
  root: {
    width: "100%",
    zoom: "75%"
  },
  appBar: {
    background: "mediumvioletred"
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    textTransform: "capitalize",
    fontWeight: "bold",
    fontSize: "19px",
    marginLeft: -12,
    marginRight: 20
  },
  linkMenuItems: {
    textDecoration: "none",
    color: "white"
  },
  linkMenuItemsDropdown: {
    textDecoration: "none",
    color: "black"
  },
  link: {
    textDecoration: "none",
    color: "black"
  },
  avatar: {
    margin: 10
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.75)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    color: "black",
    "&:hover": {
      color: fade(theme.palette.common.white, 0.25)
    },
    width: theme.spacing(9),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "primary",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(10),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
});

class Header extends Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null
  };

  logoutUser = () => {
    this.props.logout();
  };
  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    if (!this.props.isAuthenticated) {
      return <Redirect to="/auth/login" />;
    }

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
        <Link to="/settings" className={classes.linkMenuItemsDropdown}>
          <MenuItem>Settings</MenuItem>
        </Link>

        <MenuItem onClick={this.logoutUser}>Logout</MenuItem>

        <Typography
          variant="title"
          gutterBottom
          style={{ fontSize: "13px", color: "#D23E56" }}
          align="center"
        />
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>

        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton color="inherit">
            <Badge badgeContent={11} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );

    return (
      <Fragment>
        <div className={classes.root}>
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
              >
                <MenuIcon />
              </IconButton>
              <Typography
                className={classes.title}
                variant="h4"
                color="inherit"
                noWrap
                //style={{ fontWeight: "bold" }}
              >
                Symboboard
              </Typography>

              <div className={classes.grow} />
              <div className={classes.sectionDesktop}>
                <div>
                  <Grid container justify="center" alignItems="center">
                    <div style={{ paddingRight: 20 }}>
                      <Link to="/" className={classes.linkMenuItems}>
                        <IconButton color="inherit">
                          <PollIcon />
                        </IconButton>

                        <Typography
                          variant="body2"
                          color="inherit"
                          noWrap
                          style={{ fontWeight: "bold" }}
                        >
                          Analytics
                        </Typography>
                      </Link>
                    </div>

                    <div style={{ paddingRight: 20 }}>
                      <Link to="/settings" className={classes.linkMenuItems}>
                        <IconButton color="inherit">
                          <SettingsIcon />
                        </IconButton>

                        <Typography
                          variant="body2"
                          color="inherit"
                          noWrap
                          style={{ fontWeight: "bold" }}
                        >
                          Settings
                        </Typography>
                      </Link>
                    </div>
                  </Grid>
                </div>

                <IconButton
                  color="inherit"
                  onClick={this.handleProfileMenuOpen}
                >
                  <AccountCircle style={{ height: 50, width: 50 }} />
                </IconButton>
              </div>
              <div className={classes.sectionMobile}>
                <IconButton
                  aria-haspopup="true"
                  onClick={this.handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
          {renderMenu}
          {renderMobileMenu}
        </div>
      </Fragment>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { logout }
)(withStyles(styles)(Header));
