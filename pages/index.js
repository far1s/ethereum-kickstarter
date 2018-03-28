import React from 'react';
import {
    Card,
    Button
} from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';

export default class CampaignIndex extends React.Component {
    /**
     * Unsing keyword "static" it defines a class function.
     * Is not assigned to instances of the class. If we want
     * to call this function, we don't have to create an
     * instance. Next requires this function.
    */
    static async getInitialProps() {
        const campaigns = await factory.methods.getDeployedCampaigns().call();
        return {
            campaigns
        }
    }

    renderCampaigns = () => {
        const { campaigns } = this.props;
        const items = campaigns && campaigns.map(address => {
            return {
                header: address,
                description: <a>View Campaign</a>,
                fluid: true
            };
        });
        return <Card.Group items={items}/>
    }

    render() {
        return (
            <Layout>
                <h3>Open Campaigns</h3>
                <Button
                    floated="right"
                    content="Create Campaigns"
                    icon="add circle"
                    primary
                />
                {this.renderCampaigns()}
            </Layout>
        );
    }
}
