import React,{Component} from 'react'

class TeamMember extends Component{
    render(){
       return(
        <div className="col-md-4 col-sm-6 border">
            <div className="card">
                <div className="card-header">
                    {this.props.name}
                </div>
                <div className="card-body"  style={{backgroundColor:this.props.email? 'white' : 'black'}}>
                    {this.props.email}
                </div>
            </div>
        
       
        </div>
    )  
    }
   
}
export default TeamMember