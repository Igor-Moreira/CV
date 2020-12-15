import React from 'react'
import App from 'next/app'
import '../CSS/style.css';

class MyApp extends App {
    render() {
        const { Component, pageProps} = this.props
        return (
            <React.Fragment>
                <style jsx global>
                {`                    
                    @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;700&display=swap');
                    @import url('https://fonts.googleapis.com/css2?family=Racing+Sans+One&display=swap');
                `}
                </style>
                <Component {...pageProps} />
            </React.Fragment>
            )
    }
}

export default MyApp