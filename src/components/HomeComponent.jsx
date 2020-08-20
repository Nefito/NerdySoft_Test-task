import React, { Component } from 'react';
import { Card, CardHeader, CardText, CardBody, CardFooter } from 'reactstrap';
import AnnouncementDetail from './AnnouncementDetail';

class Home extends Component {
    constructor(props){
        super(props);

        this.state = {
            selectedAnn: null
        };
    }

    onAnnSelect(ann) {
        this.setState({ selectedAnn: ann});
    }

    render() {
        const ann_list = this.props.announcements.map((ann) => {
            return (
                <div className="col-12 mt-5">
                    <Card key={ann.id} className="text-center" onClick={() => this.onAnnSelect(ann)}>
                        <CardHeader tag="h3">{ann.title}</CardHeader>
                        <CardBody>
                            <CardText>{ann.description}</CardText>
                        </CardBody>
                        <CardFooter className="text-muted text-right">Posted on {ann.date.toDateString()}</CardFooter>
                    </Card>
                </div>
            );
        });
        return (
            <div className="container">
                <div className="row">
                    {ann_list}
                </div>
                <AnnouncementDetail selectedAnn={this.state.selectedAnn} />
            </div>
        );
    }
}

export default Home;
