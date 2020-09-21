import React from 'react';
import { Card, CardHeader, CardText, CardBody, CardFooter, Breadcrumb, BreadcrumbItem, Navbar, NavbarBrand } from 'reactstrap';
import { Link } from 'react-router-dom';

function FindSimilar({announcements, selectedAnn}) {
    let all_words_count = new Map();

    const similar_ann_list = announcements.map((ann) => {
        let title_word_count = 0;
        let desc_words_count = 0;

        if(selectedAnn.ID !== ann.ID) {
            for (let i = 0; i < selectedAnn.title.split(' ').length; i++) {
                for (let j = 0; j < ann.title.split(' ').length; j++) {
                    if (selectedAnn.title.split(' ')[i] === ann.title.split(' ')[j]) {
                        title_word_count++;
                    }
                }
            }
            for (let i = 0; i < selectedAnn.description.split(' ').length; i++) {
                for (let j = 0; j < ann.description.split(' ').length; j++) {
                    if (selectedAnn.description.split(' ')[i] ===  ann.description.split(' ')[j]) {
                        desc_words_count++;
                    }
                }
            }
            all_words_count.set(ann.ID, title_word_count+desc_words_count);
        }
    });

    function RenderSimilarAnn() {
        let annID_list = []
        for (let i = 0; i < 3; i++) {
            let maxkey;
            for(let [key, value] of all_words_count.entries()) {
                if(value === Math.max(...all_words_count.values()) && value > 1){
                    maxkey = key;
                    annID_list.push(maxkey);
                }
                all_words_count.delete(maxkey);
            }
            if (annID_list.length > 0) {
                return annID_list.map((ID) => {
                    console.log(annID_list.length);
                    return <RenderAnn ann={announcements.filter((ann) => ann.ID === ID)[0]} />
                });
            }
            return (<h4> No Similar Announcements Were Found :(</h4>);
        }
    }

    return (
        <div>
            <RenderSimilarAnn />
        </div>
    );

}

function RenderAnn({ann}) {
        if (ann != null && ann.show) {
            return (
                <div key={ann.ID}>
                    <Card className="text-center mt-2">
                        <CardHeader tag="h3">{ann.title}</CardHeader>
                        <CardBody>
                            <CardText>{ann.description}</CardText>
                        </CardBody>
                        <CardFooter className="text-muted text-right">{ann.edited?<i>Edited </i>: null}
                            Posted on {ann.date.toDateString()}</CardFooter>
                    </Card>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

const AnnouncementDetail = (props) => {
    return (
        <>
            <Navbar dark color="secondary">
                <div className="container">
                    <NavbarBrand href="/">Announcement Website</NavbarBrand>
                </div>
            </Navbar>
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/home">Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>{props.ann.title}</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <RenderAnn ann={props.ann} />
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

export default AnnouncementDetail;
