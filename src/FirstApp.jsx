import PropTypes from 'prop-types'
//preferible poner tus funciones fuera del componente por que si no se renderizan cada vez que se renderiza el componente



const FirstApp = ({title,subtitle,name }) => {
    
    return (
        <>
            <h1>{title} </h1>
            <p>{subtitle} </p>
            <p>{name}</p>
        </>
        
  )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
}
FirstApp.defaultProps = {
    title: "No hay titulo",
    subtitle: "no hay subtitulo",
    name: "gianmarco"   
}

export default FirstApp