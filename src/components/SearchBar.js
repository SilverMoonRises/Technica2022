import React from 'react';
function searchBar(placeholder, data) {
  return (
    <div className='search'>
      <div className='searchInputs'>
        <input type='text' placeholder='={}' />
        <div className='searchIcon'>
          <div className='dataResult'>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default searchBar;
