import React, {Component} from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import Modal from 'react-modal';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import PropTypes from 'prop-types';


const customStyles= {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    }
}

const TabContainer = function(props) {
    return(
        <Typography component="div" style={{padding: 0, textAlign: 'center'}}>
            {props.children}
        </Typography>
    );
}

TabContainer.PropTypes = {
    children: PropTypes.node.isRequired
}

class Header extends Component {
    constructor() {
        super();
        this.state = {
            modalIsOpen: false,
            value: 0,
        };
    }

    openModalHandler = () => {
        this.setState({modalIsOpen: true})
    }

    closeModalHandler = () => {
        this.setState({modalIsOpen: false})
    }

    tabChangeHandler = (event, value) => {
        this.setState({value});
    }

    render() {
        // const { classes } = this.props;
        return (
            <div>
                <header className="app-header">
                    <IconButton >
                    <FastfoodIcon className="logo" style={{color: "#ffffff"}} />
                    </IconButton>
                    <div className="login-button">
                        <Button variant="contained" color="default" startIcon={<AccountCircle />} onClick={this.openModalHandler}>
                            Login
                        </Button>
                    </div>
                </header>
                <Modal 
                ariaHideApp={false} 
                isOpen={this.state.modalIsOpen} 
                contentLabel="Login"
                onRequestClose={this.closeModalHandler}
                style={customStyles}>
                    <Tabs className="tabs" value={this.state.value} onChange={this.tabChangeHandler}>
                        <Tab label="LOGIN" />
                        <Tab label="SIGNUP"/>
                    </Tabs>
                    {this.state.value === 0 &&
                    <TabContainer>
                        <FormControl required>
                            <InputLabel htmlFor="contactNumber">Contact No.</InputLabel>
                            <Input id="contactNumber" type="text"/>
                        </FormControl><br/><br/>
                        <FormControl required>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input id="password" type="password"/>
                        </FormControl><br/><br/>
                        <Button variant="contained" color="primary">LOGIN</Button>
                    </TabContainer>}
                    {this.state.value === 1 &&
                    <TabContainer>
                        <FormControl required>
                            <InputLabel htmlFor="firstName">First Name</InputLabel>
                            <Input id="firstName" type="text"/>
                        </FormControl><br/><br/>
                        <FormControl required>
                            <InputLabel htmlFor="lastName">Last Name</InputLabel>
                            <Input id="lastName" type="text"/>
                        </FormControl><br/><br/>
                        <FormControl required>
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <Input id="email" type="text"/>
                        </FormControl><br/><br/>
                        <FormControl required>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input id="password" type="password"/>
                        </FormControl><br/><br/>
                        <FormControl required>
                            <InputLabel htmlFor="contactNo">Contact No.</InputLabel>
                            <Input id="contactNo" type="text"/>
                        </FormControl><br/><br/>
                        <Button variant="contained" color="primary">SIGNUP</Button>
                    </TabContainer>}
                </Modal>
            </div>
        )
    }
}
export default Header;
