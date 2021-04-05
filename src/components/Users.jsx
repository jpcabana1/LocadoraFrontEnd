import {React , Component} from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Users.css'

class ListUsers extends Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            users: [],
            filterText:""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        fetch("http://localhost:8080/users/all")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                users: result
              });
            },
           
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
    }

    handleChange() {
      this.setState(state =>( {
        filterText: document.getElementById("txtPesquisar").value
      }));
      console.log(this.state.filterText);
    }

    render() {
        const { error, isLoaded, users, filterText } = this.state;
        let items = users.filter(p => p.name.includes(filterText));
        if (error) {
          return(<div>
                    <Alert variant="danger"> Error: {error.message}</Alert>
                </div>);
        } else if (!isLoaded) {
          return (
          <div>
               <Alert variant="warning">Loading...</Alert>
          </div>
          );
        } else {
          return (
           <div className="Users">
            <Form.Control id="txtPesquisar" size="lg" type="text" placeholder="Pesquisar por nome"  onChange={this.handleChange}/>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nome</th>
                  <th>Username</th>
                  <th>Remover</th>
                </tr>
              </thead>
              {items.map(item => (
                  <tbody>
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.username}</td>
                    <td><Button variant="outline-danger">Dar baixa</Button>{' '}</td>
                  </tr>
                  </tbody>
                ))}
            </Table>
           </div>
          );
        }
      }

}

export default ListUsers;
