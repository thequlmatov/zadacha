import React, { Component } from 'react'
import Item from './Item';

export default class ClassComp extends Component {


  constructor() {
    super();
    this.state = {
      api: [],
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
                this.state.api.map(obj => {
                 /*  return <Item id={obj.id} name={obj.name} email={obj.email} body={obj.body}/> */
                 if ( obj.id <= 10) {
                  return <Item id={obj.id} name={obj.name} email={obj.email} body={obj.body}/>
                 }
                })
              }








      </  div>
    )
  }
}
