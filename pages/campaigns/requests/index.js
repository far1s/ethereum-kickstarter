import React from 'react';
import Layout from '../../../components/Layout';
import RequestRow from '../../../components/RequestRow';
import {
    Button,
    Table,
} from 'semantic-ui-react';
import { Link } from '../../../routes';
import Campaign from '../../../ethereum/campaign';

export default class RequestIndex extends React.Component {
    static async getInitialProps(props) {
        const { campaignAddress } = props.query;
        const campaign = Campaign(campaignAddress);
        const requestCount = await campaign.methods.getRequestCount().call();
        const approversCount = await campaign.methods.approversCount().call();

        const requests = await Promise.all(
            Array(parseInt(requestCount))
            .fill()
            .map((element, index) => campaign.methods.requests(index).call())
        );
        return {
            campaignAddress,
            requests,
            requestCount,
            approversCount,
        };
    }

    renderRow = () => {
        const {
            requests,
            campaignAddress,
            approversCount,
        } = this.props;
        return requests.map((request, index) =>
            <RequestRow
                key={index}
                id={index}
                request={request}
                address={campaignAddress}
                approversCount={approversCount}
            />
        );
    }

    render() {
        const { Header, Row, HeaderCell, Body } = Table;
        return (
            <Layout>
                <h3>Requests</h3>
                <Link route={`/campaigns/${this.props.campaignAddress}/requests/new`}>
                    <a>
                        <Button
                            primary
                            floated="right"
                            style={{ marginBottom: '10px' }}
                        >Add Request</Button>
                    </a>
                </Link>
                <Table>
                    <Header>
                        <Row>
                            <HeaderCell>ID</HeaderCell>
                            <HeaderCell>Description</HeaderCell>
                            <HeaderCell>Amount</HeaderCell>
                            <HeaderCell>Recipient</HeaderCell>
                            <HeaderCell>Approval</HeaderCell>
                            <HeaderCell>Approve</HeaderCell>
                            <HeaderCell>Finalize</HeaderCell>
                        </Row>
                    </Header>
                    <Body>
                        {this.renderRow()}
                    </Body>
                </Table>
                <div>Fround {this.props.requestCount} requests</div>
            </Layout>
        );
    }
}
