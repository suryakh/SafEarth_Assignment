import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Form.scss'

export class Logout extends Component {
    render() {
        return (
            <div className="singout">
                <h1>User successfullly loggedout</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout)
