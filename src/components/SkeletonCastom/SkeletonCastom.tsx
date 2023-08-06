
import { Skeleton } from "@mui/material";

const SkeletonCastom = () => {
  return (
    <>
      <div className='card__img'>
        <Skeleton variant="circular" width={200} height={200} />
      </div>
      <div className='card__container'>
        <div className="card__container-name">
          <Skeleton variant="rounded" width={210} height={60} />
        </div>
        <div className="card__container-bio">
          <Skeleton variant="rounded" width={210} height={60} />
        </div>
        <Skeleton variant="rounded" width={210} height={60} />
      </div>
      
    </>
          
  )
}

export default SkeletonCastom