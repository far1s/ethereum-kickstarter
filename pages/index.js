import React from 'react';
import factory from '../ethereum/factory';

export default class CampaignIndex extends React.Component {
    /**
     * Unsing keyword "static" it defines a class function.
     * Is not assigned to instances of the class. If we want
     * to call this function, we don't have to create an
     * instance. Next requires this function.
    */
    static async getInitialProps() {
        const campaings = await factory.methods.getDeployedCampaigns().call();
        return {
            campaings
        }
    }

    render() {
        return <div>{this.props.campaings[0]}</div>;
    }
}
