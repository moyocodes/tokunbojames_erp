
import LandlordTable from 'components/tables/LandlordTable'
import React from 'react'

const AllLandlords: React.FC = () => {
  return (
    <div className="w-full overflow-x-scroll">
      <LandlordTable />
    </div>
  )
}

export default AllLandlords
