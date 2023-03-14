import React from "react";

export function Profile() {
    return (
        <div className='content'>
            <div>
                <img
                    src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                    alt="image"/>
            </div>
            <div>
                avatar + description
            </div>
            <div>My posts
                <div>
                    New post
                </div>
                <div>
                    <div>Post1</div>
                    <div>Post2</div>
                </div>
            </div>
        </div>
    )
}