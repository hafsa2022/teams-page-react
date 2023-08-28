import React,{Component} from 'react'
import TeamMember from './TeamMember'
import infos from './memberInfos'

class Team extends Component{
    constructor(){
        super();
        this.state={
            memberInfo:infos,
            Members:[],
            count:0
        }
        this.clickEvent=this.clickEvent.bind(this)

    }
    clickEvent(){
        if(this.state.count < this.state.memberInfo.length){
            this.state.Members.push(this.state.memberInfo[this.state.count])
            this.setState(function(prevState){ return {count:prevState.count+1} } )
            console.log(this.state.Members) 
            this.newMembers=this.state.Members.map(member => <TeamMember key={member.id} name={member.name} email={member.email} />)
        }


    }
    render(){ 
    return(
       <div className="row">   
            <button className="btn btn-primary btn-lg btn-block" onClick={this.clickEvent}> Click me ! </button> 
            {this.newMembers}
       </div>
    )
}}
  
export default Team