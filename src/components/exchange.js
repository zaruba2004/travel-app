import React from 'react';

export default class Exchange extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
    }
    

    componentDidMount() {
        console.log(this.props.codeCoutry);
        fetch('https://v6.exchangerate-api.com/v6/2c1bd0938506ebb71e12db1c/latest/USD')
         .then(res => res.json())
         .then(
             (result) => {
                 this.setState({
                     isLoaded: true,
                     items: result.conversion_rates
                 });
             }, (error) => ({
                 isLoaded: true,
                 error
             })
         )
    };

   
    render(){
        const code = this.props.codeCoutry
        const {error, isLoaded, items} = this.state;
        if (error) {
            return <p>Ошибка загрузки курса валют. Error {error.message}</p>
        } else if (!isLoaded) {
            return <p>Loading...</p>
        } else {
            return  <div>
                        <h5>$ - {(items[code]).toFixed(2)}, &euro; - {(items[code]/items['EUR']).toFixed(2)}, BYN - {(items[code]/items['BYN']).toFixed(2)}</h5>
                    </div>            
            }
    }
    
}
