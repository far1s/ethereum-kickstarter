import React from 'react';
import {
    Form,
    Input,
    Message,
    Button,
} from 'semantic-ui-react';
import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';
import { Router } from '../routes';

export default class ContributeFrom extends React.Component {
    state = {
        value: '',
        errorMessage: '',
        loading: false,
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        this.setState({
            loading: true,
            errorMessage: ''
        });
        const campaign = Campaign(this.props.campaignAddress);
        try {
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.contribute().send({
                from: accounts[0],
                value: web3.utils.toWei(this.state.value, 'ether')
            });
            // refresh the page when transaction finished
            Router.replaceRoute(`/campaigns/${this.props.campaignAddress}`);
        } catch (error) {
            this.setState({ errorMessage: error.message });
        }
        this.setState({
            value: '',
            loading: false
        });
    }

    render() {
        return (
            <Form
                onSubmit={this.handleSubmit}
                error={!!this.state.errorMessage}
            >
                <Form.Field>
                    <label>Amount to Contribute</label>
                    <Input
                        label="ether"
                        labelPosition="right"
                        value={this.state.value}
                        onChange={(event) => this.setState({
                            value: event.target.value
                        })}
                    />
                </Form.Field>
                <Message
                    error
                    header="Oops!"
                    content={this.state.errorMessage}
                />
                <Button
                    primary
                    loading={this.state.loading}
                >
                    Contribute!
                </Button>
            </Form>
        );
    }
}
