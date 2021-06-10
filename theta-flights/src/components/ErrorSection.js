import { Link } from 'react-router-dom';
import './ErrorSection.css';


export default function ErrorSection() {
  return (
      <>
    <div className="Error__Container">
      <div className="Error__Contents">
        <h1 className="error-message">404 Not Found!</h1>
        <Link to="/search">
          <button className="error__btn">Back To Search</button>
        </Link>
      </div>
    </div>
    </>
  )
}