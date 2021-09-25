import React from 'react'
import ReactDom from 'react-dom'
import styles from './mystyle.module.css'

class Car extends React.Component{
    render(){
        return <h1 className ={styles.bgblue}>Hello Car!</h1>
    }
}

export default Car;