import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export default class HomeContainer extends React.Component<RouteComponentProps<any>, void> {
    render() {
        return (
        <div>
            You are on home page
        </div>
        )
    }
}