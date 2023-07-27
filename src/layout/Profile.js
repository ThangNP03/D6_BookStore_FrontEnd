import React from 'react'

export default function Profile() {
    return (
        <div style={{ backgroundColor: '#f0f0f0' }}>

            <div className="container bootstrap snippets bootdey">
                <h1 className="text-primary">Edit Profile</h1>
                <hr />
                <div className="row">
                    {/* left column */}
                    <div className="col-md-3">
                        <div className="text-center">
                            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" className="avatar img-circle img-thumbnail" width={200} height={200} alt="avatar" />
                            <h6>Upload a different photo...</h6>
                            <input type="file" />
                        </div>
                    </div>
                    {/* edit form column */}
                    <div className="col-md-9 personal-info">
                        <h3>Personal info</h3>
                        <form className="form-horizontal" role="form">
                            <div className="form-group">
                                <label className="col-lg-3 control-label">First name:</label>
                                <div className="col-lg-8">
                                    <input className="form-control" type="text" defaultValue="dey-dey" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-lg-3 control-label">Last name:</label>
                                <div className="col-lg-8">
                                    <input className="form-control" type="text" defaultValue="bootdey" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-lg-3 control-label">Company:</label>
                                <div className="col-lg-8">
                                    <input className="form-control" type="text" defaultValue />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-lg-3 control-label">Email:</label>
                                <div className="col-lg-8">
                                    <input className="form-control" type="text" defaultValue="janesemail@gmail.com" />
                                </div>
                            </div>
                           
                        </form>
                    </div>
                </div>
                <hr />
            </div>

        </div>

    )
}
