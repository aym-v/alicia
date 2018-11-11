import React from 'react'
import './Ads.css'

const Ads = ({ads=[
	{
		"id": "47c4abd8-f1e0-41be-9e30-74e7492aedd6",
		"ad_name": "zeoiej",
		"width": 309,
		"height": 309
	},
	{
		"id": "f0f81490-a75e-4e3d-956d-8877c404a100",
		"ad_name": "zeoiej",
		"width": 309,
		"height": 309
	},
	{
		"id": "668185cb-d048-464b-ab0d-0b64d21b0f6e",
		"ad_name": "zeoiej",
		"width": 309,
		"height": 309
	}]}) => (
    <div className="main-container ads">
        <header className="ads__header">
            <div>name</div>
            <div>id</div>
            <div>width</div>
            <div>height</div>
        </header>
        <div className="ads__list">
            {ads.map(
                (ad, i) => (
                    <div key={i} className="ads__ad">
                        <div className="ads__ad-name">{ad.ad_name}</div>
                        <div className="ads__ad-id">{ad.id}</div>
                        <div>{ad.width}</div>
                        <div>{ad.height}</div>
                        <div className="ads__ad-edit row-icon"><i className="material-icons">edit</i></div>
                        <div className="ads__ad-delete row-icon"><i className="material-icons">delete</i></div>
                    </div>
                )
            )}
        </div>
    </div>
)

export default Ads