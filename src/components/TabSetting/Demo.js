import React from "react";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import adjust from "../TabSetting/adjust.png";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import "./switchColor.css";
// styles
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  paper: {
    marginRight: theme.spacing(2)
  },
  iconPos: {
    position: "absolute",
    bottom: "30px",
    marginBottom: "10px",
    right: "30px",
    marginRight: "10px",
    cursor: "pointer"
  },
  paperColor: {
    backgroundColor: "#1e2029",
    color: "white"
  },
  headStyle: {
    margin: "0px",
    padding: "10px",
    textAlign: "left"
  },
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 80,
    color: "white",
    paddingLeft: "10px"
  },
  selectEmpty: {
    // marginTop: theme.spacing(2),
    color: "white"
  }
}));

export default function MenuListComposition(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  //close panel
  // const handleClose = event => {
  //   if (anchorRef.current && anchorRef.current.contains(event.target)) {
  //     return;
  //   }

  //   setOpen(false);
  // };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  // switch states and hide
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedD: false,
    checkedE: false,
    checkedF: false,
    hideSearch: true,
    hideClock: true
  });

  const handleChange = name => event => {
    if (name === "checkedA") {
      setState({
        ...state,
        [name]: event.target.checked,
        hideClock: !state.hideClock
      });
      props.clockHide(state.hideClock);
    } else if (name === "checkedB") {
      setState({
        ...state,
        [name]: event.target.checked,
        hideSearch: !state.hideSearch
      });
      props.searchHide(state.hideSearch);
    } else {
      setState({ ...state, [name]: event.target.checked });
    }
  };

  // select or DropDown
  const [eng, setEng] = React.useState("");
  const handleChanges = event => {
    setEng(event.target.value);
  };

  return (
    <>
      <div className={classes.root}>
        <div>
          <img
            alt=""
            className={classes.iconPos}
            ref={anchorRef}
            aria-controls={open ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
            src={adjust}
          />
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
            placement="top-end"
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "right" ? "center top" : "left bottom"
                }}
              >
                {/* panel */}
                <Paper className={classes.paperColor}>
                  <h5 className={classes.headStyle}>New Tab Settings</h5>
                  <ClickAwayListener
                  // onClickAway={handleClose}
                  >
                    <MenuList
                      autoFocusItem={open}
                      id="menu-list-grow"
                      onKeyDown={handleListKeyDown}
                    >
                      {/* menu items / panel items */}
                      <MenuItem>
                        Show Clock
                        {/* switch */}
                        <FormGroup>
                          <FormControlLabel
                            style={{ paddingLeft: "132px", marginRight: "0px" }}
                            control={
                              <Switch
                                size="small"
                                checked={state.checkedA}
                                onChange={handleChange("checkedA")}
                              />
                            }
                          />
                        </FormGroup>{" "}
                      </MenuItem>
                      <MenuItem>
                        Show Statistics
                        {/* switch */}
                        <FormGroup>
                          <FormControlLabel
                            style={{ paddingLeft: "107px", marginRight: "0px" }}
                            control={
                              <Switch
                                size="small"
                                checked={state.checkedD}
                                onChange={handleChange("checkedD")}
                              />
                            }
                          />
                        </FormGroup>{" "}
                      </MenuItem>

                      <MenuItem>
                        Show Search Bar{" "}
                        <FormGroup>
                          <FormControlLabel
                            style={{ paddingLeft: "97px", marginRight: "0px" }}
                            control={
                              <Switch
                                size="small"
                                checked={state.checkedB}
                                onChange={handleChange("checkedB")}
                              />
                            }
                          />
                        </FormGroup>{" "}
                      </MenuItem>
                      <MenuItem o>
                        Default Search Engine{" "}
                        <FormControl className={classes.formControl}>
                          <Select
                            value={eng}
                            onChange={handleChanges}
                            displayEmpty
                            className={classes.selectEmpty}
                          >
                            <MenuItem value="">
                              <em>Google</em>
                            </MenuItem>
                            <MenuItem value={10}>Google</MenuItem>
                          </Select>
                        </FormControl>
                      </MenuItem>

                      <MenuItem>
                        Show Background Image
                        {/* switch */}
                        <FormGroup>
                          <FormControlLabel
                            style={{ paddingLeft: "40px", marginRight: "0px" }}
                            control={
                              <Switch
                                size="small"
                                checked={state.checkedE}
                                onChange={handleChange("checkedE")}
                              />
                            }
                          />
                        </FormGroup>{" "}
                      </MenuItem>

                      <MenuItem>
                        Show Ads for Good
                        {/* switch */}
                        <FormGroup>
                          <FormControlLabel
                            style={{ paddingLeft: "80px", marginRight: "0px" }}
                            control={
                              <Switch
                                size="small"
                                checked={state.checkedF}
                                onChange={handleChange("checkedF")}
                              />
                            }
                          />
                        </FormGroup>{" "}
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </div>
    </>
  );
}
