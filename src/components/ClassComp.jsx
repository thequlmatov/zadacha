import React, { Component } from 'react'
import Item from './Item';
import Pagination from './Pagination';

export default class ClassComp extends Component {




  constructor() {
    super();
    this.state = {
      api: [],
      page: 1,
      from: 0,
      to:10
    }
  }


  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(mal => {
        this.setState({
          api: mal
        })
      })
  }

  nextPage(current){
    this.setState({to:current+ '0',from:current-1 + '0',page:current})
  }

  render() {
    return (
      <div className='cards'>



        <table class="table">
          <tr>
            <th className='nmb'>#</th>
            <th className='last'>name</th>
            <th className='gmail'>email</th>
            <th className='info'>body</th>
          </tr>
        </table> <hr />
        {
          this.state.api.slice(this.state.from,this.state.to).map(obj => {
             return <Item id={obj.id} name={obj.name} email={obj.email} body={obj.body}/>


          })
        }

        <div className="pagination">
          <button disabled={this.state.page <= 1?true:false } onClick={() => this.nextPage(this.state.page -1)}>&laquo;</button>
          {
            this.state.api.map((obj,index) => {
              let maxLength = this.state.api.length / 10
              if(maxLength > index) {
                return <button className={this.state.page === index+1? 'active-pagination':null} onClick={()=> this.nextPage(index+1)}>{index+1}</button>
              }
            })
          }
          <button href="#"  disabled={this.state.page >= this.state.api.length / 10?true:false}  onClick={() => this.nextPage(this.state.page +1)}>&raquo;</button>
        </div>





      </div>
    )
  }
}
