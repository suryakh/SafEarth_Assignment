import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Switch, Route, Link} from 'react-router-dom'
import Login  from '../Common/Login'
import Signup  from '../Common/Signup'
import Home from '../Components/Home'
import { logout } from '../Redux/Actions'
import Logout from '../Common/Logout'

export class Routers extends Component {
    handleClick = () => {
        this.props.logout()
    }
    render() {
        console.log(this.props.value)
        return (
            <>
            <div className="Nav">
            <div className="navBar">
                <ul>
                    <li>
                <Link to ='/'> Home</Link>
                </li>
                <li>
                <Link to ='/login'> Login</Link>
                </li>
                <li>
                <Link to ='/signup'>signup</Link>
                </li>
                <li>
                    <Link to="logout"> <button onClick={()=>this.handleClick()}>Logout</button></Link>
                </li>
                </ul>
            </div>
            </div>
            <div>
                <Switch>
                <Route path='/' exact render={(props)=><Home {...props}/>}/>
                <Route path='/login' exact render={(props)=><Login  {...props}/>}/>
                <Route path='/signup' exact render={(props)=><Signup {...props}/>}/>
                <Route path='/logout' exact render={(props)=><Logout {...props}/>}/>
                </Switch>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    value :state.userReducers
})

const mapDispatchToProps = dispatch =>{
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Routers)
