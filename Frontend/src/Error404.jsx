import { Link } from 'react-router-dom';

function Error404() {
  return (
    <>
      <div>
        <h1><Link to="/">Audio Appliances</Link></h1>

        <h1 className="error-404">404</h1>
        <p className="error-404-text">Page not found</p>
      </div>
    </>
  )
}

export default Error404;