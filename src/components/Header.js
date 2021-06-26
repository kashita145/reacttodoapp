import '/Users/kashita/todoapp/src/App.css' ;
import Button from './Button'
import PropTypes from 'prop-types'


const Header = ({title,onAdd, showAdd} ) => {
    return (
        <div>
            <h1 className="App-header"> {title} </h1>
            <Button 
            color='white' 
            text={showAdd? 'close' :'add'} 
            onClick={onAdd} />
        </div>
    )
}

Header.defaultProps={
    title:"TO DO APP"
}

export default Header
