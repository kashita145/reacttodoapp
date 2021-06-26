const Button = ({color,text, onAdd}) => {
    return (
        <div>
            <button onClick={onAdd} style={{backgroundColor:color}}> {text} </button>
        </div>
    )
}

export default Button
