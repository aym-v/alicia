import React, { PureComponent } from 'react'
import './Ads.css'

class Ads extends PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { getAds, token } = this.props
        getAds(token);
    }

    render() {
        const { ads } = this.props;
        return (
            <div className="main-container ads">
                <header className="ads__header">
                    <div>name</div>
                    <div>id</div>
                    <div>width</div>
                    <div>height</div>
                </header>
                <div className="ads__list">
                    {ads && ads.map(
                        (ad, i) => (
                            <div key={i} className="ads__ad">
                                <div className="ads__ad-name">{ad.ad_name}</div>
                                <div className="ads__ad-id">{ad.id}</div>
                                <div>{ad.width}</div>
                                <div>{ad.height}</div>
                                <div className="ads__ad-edit row-icon"><i className="material-icons">edit</i></div>
                                <div className="ads__ad-delete row-icon"><i className="material-icons">delete</i></div>
                            </div>
                        ))}
                </div>
            </div>
        )
    }
}

export default Ads