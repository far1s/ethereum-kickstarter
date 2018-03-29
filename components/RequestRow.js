import React from 'react';
import {
    Table,
    Button,
} from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Campaign from '../ethereum/campaign';

export default class RequestRow extends React.Component {
    state = {
        approveLoading: false,
        finalizeLoading: false,
    }

    handleApprove = async () => {
        const { id, address } = this.props;
        this.setState({ approveLoading: true });
        const campaign = Campaign(address);
        const accounts = await web3.eth.getAccounts();
        await campaign.methods.approveRequest(id).send({
            from: accounts[0]
        });
        this.setState({ approveLoading: false });
        Router.replaceRoute(`/campaigns/${address}/requests`)
    }

    handleFinalize = async () => {
        const { id, address } = this.props;
        this.setState({ finalizeLoading: true });
        const campaign = Campaign(address);
        const accounts = await web3.eth.getAccounts();
        await campaign.methods.finalizeRequest(id).send({
            from: accounts[0]
        });
        this.setState({ finalizeLoading: false });
        Router.replaceRoute(`/campaigns/${address}/requests`)
    }

    render() {
        const {
            id,
            request: {
                description,
                value,
                recipient,
                complete,
                approvalCount,
            },
            address,
            approversCount,
        } = this.props;
        const { Row, Cell } = Table;
        const readyToFinalize = (approvalCount > approversCount / 2) && !complete;
        return (
            <Row disabled={complete} positive={readyToFinalize} >
                <Cell>{id}</Cell>
                <Cell>{description}</Cell>
                <Cell>{web3.utils.fromWei(value, 'ether')}</Cell>
                <Cell>{recipient}</Cell>
                <Cell>{approvalCount}/{approversCount}</Cell>
                <Cell>
                    {
                        !complete &&
                            <Button
                                color="green"
                                basic
                                onClick={this.handleApprove}
                                loading={this.state.approveLoading}
                            >Approve</Button>
                    }
                </Cell>
                <Cell>
                    {
                        !complete &&
                            <Button
                                color="teal"
                                basic
                                onClick={this.handleFinalize}
                                loading={this.state.finalizeLoading}
                            >Finlalize</Button>
                    }
                </Cell>
            </Row>
        );
    }
}
