import Form from '../components/Form'
import '../styles/Forms.css'

function Login(){
    return <Form route='/api/token/' method='login' />
}

export default Login