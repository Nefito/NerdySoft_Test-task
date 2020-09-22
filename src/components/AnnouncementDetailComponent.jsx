import React from 'react';
import { Card, CardHeader, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { RenderAnnouncement, Header } from '../components';
import {FindSimilar} from '../Announcement';


const AnnouncementDetailComponent = (props) => {
    return (
        <>
            <Header />
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/home">Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>{props.ann.title}</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <RenderAnnouncement ann={props.ann} divClass="col-12 mt-5" cardClass="text-center mt-2" editBtnNeeded={true} fullText={true} />
                <div className="mt-5">
                    <Card className="text-center">
                        <CardHeader tag="h3" className="mb-3">Top 3 Similar Announcements</CardHeader>
                        <FindSimilar announcements={props.announcements} selectedAnn={props.ann} />
                    </Card>
                </div>
            </div>
        </>
    );
}

export default AnnouncementDetailComponent;
