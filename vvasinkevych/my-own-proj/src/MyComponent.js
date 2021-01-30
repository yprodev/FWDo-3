import React from 'react'


export function MyComponent() {

  return (
    <table className="mtable" cellspacing="0" cellpading="0">
      <thead className="thead" >
        <th>#</th>
        <th>First</th>
        <th>Second</th>
        <th>Handle</th>
      </thead>
      <tbody>
        <tr>
          <th>1</th>
          <th>Mark</th>
          <th>Otto</th>
          <th>@mdo</th>
        </tr>
        <tr>
          <th>2</th>
          <th>Jacob</th>
          <th>Thornton</th>
          <th>@fat</th>
        </tr>
        <tr>
          <th>3</th>
          <th colspan="2" class="col2">Larry the Bird</th>
          <th>@twitter</th>
        </tr>
      </tbody>
    </table>)
} 