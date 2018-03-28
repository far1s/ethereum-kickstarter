import React from 'react';
import factory from '../ethereum/factory';

export default class CampaignIndex extends React.Component {
    async componentDidMount() {
        const campaign = await factory.methods.getDeployedCampaigns().call();
        console.log('campaign: ', campaign);
    }

    render() {
        return <div>Index</div>;
    }
}
