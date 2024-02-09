import React from 'react'

const WatchList = () => {
    return(
        <div>
            <h3>All Watchlists</h3>  
            <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Company</th>
      <th scope="col">Market Price</th>
      <th scope="col">Day Change</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Maruti Suzuki</td>
      <td>1500</td>
      <td>-137</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Tata Motors</td>
      <td>2000</td>
      <td>-345</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Volkswagan</td>
      <td>3000</td>
      <td>400</td>
    </tr>
  </tbody>
</table>
</div>
    );
}

export default WatchList;