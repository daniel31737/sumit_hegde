import React, { Component } from 'react'

export default class SubmitForm extends Component {
    render() {
        return (
            <div className="form-submit">
                <form>
                    <input className="txtSubmit" id="txtFirstName" type="text" placeholder="First Name" />
                    <input className="txtSubmit" id="txtEmail" type="text" placeholder="Email" />
                    <input className="btnSubmit" type="button" defaultValue="Get Lesson #1 now" />
                </form>
            </div>
        )
    }
}
