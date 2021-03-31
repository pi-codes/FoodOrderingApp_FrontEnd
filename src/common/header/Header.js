import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import SearchIcon from "@material-ui/icons/Search";
import Input from "@material-ui/core/Input";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Divider } from '@material-ui/core';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    headerTools: {
        [theme.breakpoints.only('xs')]: {
            flexDirection: 'column',
            alignItems: 'flex-start',
        },
    },
    appBar: {
        color: "#edede",
        width: "100%",
    },
    toolBar: {
        color: "#edede",
        width: "100%",
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    loginButton: {
        position: "relative",
        float: "right",
        alignment: "flex",
        backgroundColor: "#edede",
    },
    title: {
        flexGrow: 1,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

class Header extends Component {

    constructor () {
        super();
        this.state = {
            showModal: false
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal () {
        this.setState({ showModal: true });
    }

    handleCloseModal () {
        this.setState({ showModal: false });
    }


    render() {
        const { classes } = this.props;

        return (
            <AppBar position="static" className={classes.appBar} style={{ background: '#212b35' }} >
    <Toolbar className={classes.headerTools} >
    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <FastfoodIcon />
            </IconButton>

            <div className={classes.search}>
            <div className={classes.searchIcon}>
            <SearchIcon />
            </div>
            <InputBase placeholder="Search…" classes={{ root: classes.inputRoot, input: classes.inputInput,}}
            inputProps={{ 'aria-label': 'search' }}/>
            </div>

        <div>

        <Button variant="contained" color="default" className={classes.button} startIcon={<AccountCircle />} onClick={this.handleOpenModal}>
        Login
        </Button>

            <Modal isOpen={this.state.showModal} contentLabel="onRequestClose Example" onRequestClose={this.handleCloseModal} shouldCloseOnOverlayClick={true}>
            <Tabs>
            <div>
            <Tab label = "Login" />
            </div>
            <div>
            <Tab label = "Signup" />
            </div>
            </Tabs>

        {/* <button onClick={this.handleCloseModal}>Close Modal</button> */}
    </Modal>
        </div>

        </Toolbar>
        </AppBar>
    );
    }
}
export default withStyles(useStyles) (Header);