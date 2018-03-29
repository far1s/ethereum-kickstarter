import React from 'react';
import {
    Card,
    Grid,
} from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import web3 from '../../ethereum/web3';
import ContributeForm from  '../../components/ContributeForm';

export default class CampaignShow extends React.Component {
    static async getInitialProps(props) {
        const { campaignAddress } = props.query;

        const campaign = Campaign(campaignAddress);
        const summary = await campaign.methods.getSummary().call();
        return {
            campaignAddress,
            minimumContribution: summary[0],
            balance: summary[1],
            requestsCount: summary[2],
            approversCount: summary[3],
            manager: summary[4]
        };
    }

    renderCards = () => {
        const {
            minimumContribution,
            balance,
            requestsCount,
            approversCount,
            manager,
        } = this.props;

        const items = [
            {
                header: manager,
                meta: 'Address of Manager',
                description: 'The manager created this campaign and can create requests.',
                style: { overflowWrap: 'break-word' }
            },
            {
                header: web3.utils.fromWei(minimumContribution, 'ether'),
                meta: 'Minimum Contribution (ether)',
                description: 'You must contribute at least this much wei.'
            },
            {
                header: requestsCount,
                meta: 'Number of Requests',
                description: 'A requests tries to withdraw money from the contract. Request must be aproved by aprovers.'
            },
            {
                header: approversCount,
                meta: 'Number of Approvers',
                description: 'Number of people who have already donated to this campaign.'
            },
            {
                header: web3.utils.fromWei(balance, 'ether'),
                meta: 'Campaign Balance (ether)',
                description: 'The balance is how much money this campaign has left to spend.'
            }
        ];

        return <Card.Group items={items} />
    }

    render() {
        return (
            <Layout>
                <h3>Campaign Show</h3>
                <Grid>
                    <Grid.Column width={10}>
                        {this.renderCards()}
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <ContributeForm campaignAddress={this.props.campaignAddress} />
                    </Grid.Column>
                </Grid>
            </Layout>
        );
    }
}
