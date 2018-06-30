import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';

import { fetchAccounts } from '../actions/account'

class AppContainer extends Component {
    componentWillMount() {
        this.props.dispatch(fetchAccounts());
    }

    render() {
        console.log('accounts', this.props.accounts)
        return(
            <View>
                <Text>Accounts List</Text>

                {this.props.accounts.map(a => {
                    <Text>{a.name}</Text>
                })}
            </View>
        )
    }
}

const mapStateToProps = ({ accounts }) => ({ accounts });
export default connect(mapStateToProps)(AppContainer);