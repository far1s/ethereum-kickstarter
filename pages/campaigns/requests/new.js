import React from 'react';
import {
    Form,
    Button,
    Input,
    Message
} from 'semantic-ui-react';
import Layout from '../../../components/Layout';
import Campaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';
import { Router, Link } from '../../../routes';

export default class RequestIndex extends React.Component {
    state = {
        value: '',
        description: '',
        recipient: '',
        errorMessage: '',
        loading: false,
    }

    static async getInitialProps(props) {
        const { campaignAddress } = props.query;
        return { campaignAddress };
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const {
            value,
            description,
            recipient,
        } = this.state;
        const { campaignAddress } = this.props;

        this.setState({
            loading: true,
            errorMessage: ''
        });
        const campaign = Campaign(campaignAddress);

        try {
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.createRequest(
                description,
                web3.utils.toWei(value, 'ether'),
                recipient,
            ).send({
                from: accounts[0]
            });
            Router.pushRoute(`/campaigns/${campaignAddress}/requests`)
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
            <Layout>
                <Link route={`/campaigns/${this.props.campaignAddress}/requests`}>
                    <a>
                        Back
                    </a>
                </Link>
                <h3>Create a Request</h3>
                <Form onSubmit={this.handleSubmit} error={!!this.state.errorMessage}>
                    <Form.Field>
                        <label>Description</label>
                        <Input
                            value={this.state.description}
                            onChange={(event) => this.setState({ description: event.target.value })}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Value in Ether</label>
                        <Input
                            value={this.state.value}
                            onChange={(event) => this.setState({ value: event.target.value })}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Recipients</label>
                        <Input
                            value={this.state.recipient}
                            onChange={(event) => this.setState({ recipient: event.target.value })}
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
                    >Create!</Button>
                </Form>
            </Layout>
        );
    }
}
