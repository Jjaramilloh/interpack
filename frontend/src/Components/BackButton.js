import {Link} from 'react-router-dom'
import {BsArrowLeft} from 'react-icons/bs'

const BackButton = ({destination = '/'}) => {
  return (
    <div className='d-flex'>
        <Link
        to={destination}
        className='btn btn-primary d-flex align-items-center justify-content-center'
        style={{ width: 'fit-content', padding: '0.5rem 1rem' }}
        >
        <BsArrowLeft className='me-2' style={{ fontSize: '1.5rem' }}/>
        </Link>

    </div>
  )
}

export default BackButton