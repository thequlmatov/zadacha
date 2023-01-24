import React, { Component } from 'react'
import Item from './Item';
import Pagination from './Pagination';

export default class ClassComp extends Component {




  constructor() {
    super();
    this.state = {
      api: [],
      page: 1,

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


            if (this.state.page=2) {
              return <Item  email={obj.email} body={obj.body} />
            } else {
              return <Item id={obj.id} name={obj.name} email={obj.email} body={obj.body} />
            }


          })
        }

        <div className="pagination">
          <a href="1">&laquo;</a>
          {
            this.state.api.map(obj => {
              return <Pagination page={obj.id} id={obj.id} />
            })
          }
          <a href="#">&raquo;</a>
        </div>





      </div>
    )
  }
}
