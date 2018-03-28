import React from 'react';
import {
    Form,
    Button,
    Input,
    Message
} from 'semantic-ui-react';
import Layout from '../../components/Layout';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';

export default class CampaignNew extends React.Component {
    state = {
        minimumContribution: '',
        errorMessage: '',
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const accounts = await web3.eth.getAccounts();
            await factory.methods.createCampaign(
                this.state.minimumContribution
            ).send({
                from: accounts[0]
                // metamask calculates gas automatically
            });
        } catch (error) {
            this.setState({
                errorMessage: error.message,
            });
        }
    }

    render() {
        return (
            <Layout>
                <h3>Test</h3>
                <Form onSubmit={this.handleSubmit} error={!!this.state.errorMessage}>
                    <Form.Field>
                        <label>Minimum Contribution</label>
                        <Input
                            label="wei"
                            labelPosition="right"
                            value={this.state.minimumContribution}
                            onChange={event => this.setState({
                                minimumContribution: event.target.value
                            })}
                        />
                    </Form.Field>
                    <Message
                        error
                        header="Oops!"
                        content={this.state.errorMessage}
                    />
                    <Button primary>Create!</Button>
                </Form>
            </Layout>
        );
    }
}
