const Input = (props) => {
    return (
        <input
            name={props.name}
            type={props.type && props.type}
            placeholder={props.placeholder && props.placeholder}
            className="input"
            value={props.formData[props.name]}
            onChange={props.onChange}
        />
    )
}
export default Input;