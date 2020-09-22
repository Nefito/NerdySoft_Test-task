import React from 'react';
import { Card, CardHeader, Breadcrumb, BreadcrumbItem, Navbar, NavbarBrand } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import RenderAnnouncement from '../components/RenderAnnouncementComponent';

function FindSimilar({announcements, selectedAnn}) {
    let all_words_count = new Map();

    announcements.map((ann) => {
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
        let annID_list = [];
        let sorted_map = new Map([...all_words_count.entries()].sort((a, b) => b[1] - a[1]));
        for (let i = 0; i < 3; i++) {
            for(let [key, value] of sorted_map.entries()) {
                if(value > 1){
                    annID_list.push(key);
                    all_words_count.delete(key);
                }
            }
            if (annID_list.length > 0) {
                return annID_list.map((ID) => {
                    const ann = announcements.find(ann => ann.ID === ID);
                    return (
                        <RenderAnnouncement ann={ann} divClass="mt-3" cardClass="text-center mt-2" fullText={false} />
                    );
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
            <RenderAnnouncement ann={ann} divClass="col-12 mt-5" cardClass="text-center mt-2" editBtnNeeded={true} fullText={true} />
        );
    }
    return (
        <div></div>
    );
}


const AnnouncementDetail = ({ match }) => {
    const { annId } = match.params;
    const ann = useSelector(state => state.announcements.find(ann => ann.ID === annId));
    const announcements = useSelector(state => state.announcements);

    if(!ann) {
        return (
            <h4> Announcement Not Found :(</h4>
        );
    }

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
                        <BreadcrumbItem active>{ann.title}</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <RenderAnn ann={ann} />
                <div className="mt-5">
                    <Card className="text-center">
                        <CardHeader tag="h3" className="mb-3">Top 3 Similar Announcements</CardHeader>
                        <FindSimilar announcements={announcements} selectedAnn={ann} />
                    </Card>
                </div>
            </div>
        </>
    );
}
export default AnnouncementDetail;
