import { Link, link } from 'react-router-dom'

const Navbarz = () => {
    return (
        <header>
            <div className='container'>
                <Link to='/'>
                    <h1> Workout Buddy</h1>
                </Link>
            </div>
        </header>
    )
}

export default Navbarz