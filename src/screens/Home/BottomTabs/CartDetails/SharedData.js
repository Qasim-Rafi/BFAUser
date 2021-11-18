import React from 'react'
import {} from 'react-native'

class SharedData extends React.Component {

    state={
        item : {},
        data : []
    }
    


    setData(data) {
        this.setState({data:this.state.data.push(data)});
        console.log(data);
    }

    UpdateData(data){
        this.setState({data:data})     
    }

    getData() {
        return this.data;
    }

}
export default new SharedData;