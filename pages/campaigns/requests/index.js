import React from 'react';
import Layout from '../../../components/Layout';
import {
    Button
} from 'semantic-ui-react';
import { Link } from '../../../routes';

export default class RequestIndex extends React.Component {
    static async getInitialProps(props) {
        const { campaignAddress } = props.query;
        return { campaignAddress };
    }

    render() {
        return (
            <Layout>
                <h3>Requests</h3>
                <Link route={`/campaigns/${this.props.campaignAddress}/requests/new`}>
                    <a>
                        <Button primary>Add Request</Button>
                    </a>
                </Link>
            </Layout>
        );
    }
}
