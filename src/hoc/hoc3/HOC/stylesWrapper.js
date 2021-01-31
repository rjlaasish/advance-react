import styles from '../styles/CommonStyles'



const translateProps=(props)=>{
    let _styles={...styles.default}
    if(props.disable){
    _styles ={..._styles,...styles.disable}
    }
    const newProps={...props,style:_styles}
    return newProps;
    
}


const wrapperfunction= (WrappedComponent) => {
    return function wrapRenderer(args){
        return WrappedComponent(translateProps(args))
    }


}
export default wrapperfunction;
