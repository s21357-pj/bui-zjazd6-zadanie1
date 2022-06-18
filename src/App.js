import ky from 'ky';
import React from 'react';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.getData = this.getData.bind(this)
        this.state = {
            loaded: false
        };
    }

    async getData() {
        try {
            const json = await ky.get('https://randomuser.me/api/').json();
            await this.setState({
                gender: json.results[0].gender,
                cell: json.results[0].cell,
                email: json.results[0].email,
                dob: json.results[0].dob,
                id: json.results[0].id,
                location: json.results[0].location,
                login: json.results[0].login,
                name_title: json.results[0].name.title,
                name_first: json.results[0].name.first,
                name_last: json.results[0].name.last,
                nat: json.results[0].nat,
                phone: json.results[0].phone,
                picture: json.results[0].picture.medium,
                registered: json.results[0].registered,
                loaded: true
            } )
            console.log(json)
        } catch (e){

        }
    }

    async componentDidMount() {
        await this.getData()
    }
  render() {
        return (
       <>
          <img src={this.state.picture} alt=""></img>
          <p>{this.state.name_title} {this.state.name_first} {this.state.name_last}</p>
          <p>tel: {this.state.cell}</p>
          <p>email: {this.state.email}</p>
          <button type="button" onClick={this.getData}> Generate! </button>
       </>
   )
  }
}
