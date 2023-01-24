import React from 'react'

const Item = ({ id, name, email, body }) => {
  return (
    <div className='itm'>
      <table>
        <tr>
        <th className='id'>{id}</th>
        <td className='name'>{name}</td>
        <td className='email'>{email}</td>
        <td className='body'>{body}</td>
        </tr>
      </table> <hr />
    </div>
  )
}

export default Item