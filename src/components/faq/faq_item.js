import React, { Component } from 'react';



 class FaqItem extends Component {



  constructor () {
    super()
    this.state = {
      isHidden: true
    }
    this.toggleHidden = this.toggleHidden.bind(this);
  }
  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }
  render () {
    return (
      
      <div>
      <div className="faq__title">
      <h1>Frequently Asked Questions</h1>
      </div>

      <div id="location">
        <button onClick={this.toggleHidden} >
          Where are you located?
        </button>
        {!this.state.isHidden && <Location />}
      </div>

      <div id="showing">
      <button onClick={this.toggleHidden} >
         Do you offer private showings?
      </button>
      {!this.state.isHidden && <Showing />}
    </div>

       <div id="refund">
        <button onClick={this.toggleHidden} >
        Do you offer refunds
        </button>
        {!this.state.isHidden && <Refund />}
      </div>

         <div id="gift">
        <button onClick={this.toggleHidden} >
          Do you offer gift cards?
        </button>
        {!this.state.isHidden && <Gift />}
      </div>

         <div id="ticket">
        <button onClick={this.toggleHidden} >
            Can I purchase tickets at the theater?
        </button>
        {!this.state.isHidden && <Ticket />}
      </div>
    </div>
      
    )
  }
}


const Location = () => (
  <div id='location'>
  We are located at dlfaksjdkl
    </div>  
)

const Showing = () => (
  <div id='showing'>
  Yes, please email privateshowing@wvct.com
    </div>   
)

const Refund = () => (
  <div id='refund'>
    Unfortunately, we do not offer refunds for showings. 
    </div>   
)

const Gift = () => (
  <div id='gift'>
  Yes, please purchase gift cards at the box office. 
    </div>   
)

const Ticket = () => (
  <div id='ticket'>
    Yes! Tickets can be purchased at the box office on the west side of the theater. There are also kiosks available outside.
    </div>   
)

export default FaqItem;
