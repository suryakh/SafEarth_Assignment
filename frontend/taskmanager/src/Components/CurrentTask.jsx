import React, { Component } from 'react'
import { connect } from 'react-redux'

export class CurrentTask extends Component {
    render() {
        return (
            <div>
                Currr
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentTask)
