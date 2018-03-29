import React from 'react';
import {
    Table,
    Button,
} from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Campaign from '../ethereum/campaign';

export default class RequestRow extends React.Component {

    handleApprove = async () => {
        const { id, address } = this.props;
        console.log('id: ', id);
        const campaign = Campaign(address);
        const accounts = await web3.eth.getAccounts();
        await campaign.methods.approveRequest(id).send({
            from: accounts[0]
        });
    }

    render() {
        const {
            id,
            request: {
                description,
                value,
                recipient,
                approvalCount
            },
            address,
            approversCount,
        } = this.props;
        const { Row, Cell } = Table;
        return (
            <Row>
                <Cell>{id}</Cell>
                <Cell>{description}</Cell>
                <Cell>{web3.utils.fromWei(value, 'ether')}</Cell>
                <Cell>{recipient}</Cell>
                <Cell>{approvalCount}/{approversCount}</Cell>
                <Cell>
                    <Button
                        color="green"
                        basic
                        onClick={this.handleApprove}
                    >Approve</Button>
                </Cell>
                <Cell>{id}</Cell>
            </Row>
        );
    }
}
