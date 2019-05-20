import React, { Component } from 'react';
import PropTypes from "prop-types";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
});

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '', codeNames: [
                { name: 'KitKat' },
                { name: 'Lollipop' },
                { name: 'Marshmallow' },
                { name: 'Jelly Bean' },
                { name: 'Apollo' },
                { name: 'Voyager' },
                { name: 'Pioneer' },
                { name: 'Polar' },
                { name: 'Hello' },
                { name: 'World' }]
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({ name: event.target.value })
    }
    handleSubmit() {
        let newCodeNames = {
            name: this.state.name
        };
        this.setState({
            name: '', codeNames: [... this.state.codeNames, newCodeNames]
        });
    }
    renderData() {
        return this.state.codeNames.map((data) => {
            return (
                <div>
                    <li>{data.name}</li>
                </div>
            )
        })
    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                <header>
                    <h1>Home</h1>
                </header>
                <div>
                    <TextField
                        id="standard-name"
                        label="Name"
                        className={classes.textField}
                        value={this.state.name}
                        onChange={this.handleChange}
                        margin="normal"
                    />
                </div>
                <br/>
                <div>
                    <Button color="primary" type="submit" onClick={this.handleSubmit}>
                        Add New Code Name
                </Button>
                </div>
                <br />
                <div>
                    <h2>Lista de Code Names:</h2>
                    {this.renderData()}
                </div>
            </div>
        )
    }
}


Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);