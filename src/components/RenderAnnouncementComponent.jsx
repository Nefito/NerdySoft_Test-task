import React from 'react';
import { Card, CardHeader, CardText, CardBody, CardFooter } from 'reactstrap';
import { Link } from 'react-router-dom';
import { EditAnnouncement, DeleteAnnouncement } from '../Announcement';


const RenderAnnouncement = ( props ) => {

    return (
        <div className={props.divClass}>
            <Card className={props.cardClass}>
                <CardHeader tag="h3">
                    {props.deleteBtnNeeded?
                        <DeleteAnnouncement annId={props.ann.ID} />
                        : null
                    }
                    {props.editBtnNeeded?
                        <EditAnnouncement ann={props.ann} />
                        : null
                    }
                    <Link to={`/announcement/${props.ann.ID}`} style={{ textDecoration: 'none', color: 'black'}}>
                        {props.ann.title}
                    </Link>
                </CardHeader>
                <Link to={`/announcement/${props.ann.ID}`} style={{ textDecoration: 'none', color: 'black'}}>
                    <CardBody>
                        <CardText>{props.fullText? props.ann.description : props.ann.description.substring(0, 150)+"..."}</CardText>
                    </CardBody>
                    <CardFooter className="text-muted text-right">{props.ann.edited? <i>Edited </i>: null }
                        Posted on {props.ann.date}</CardFooter>
                </Link>
            </Card>
        </div>
    );
}
export default RenderAnnouncement;
