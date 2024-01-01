import 'dotenv/config'
import App from '../app'
import { controllers } from './utils/controllersIntantiator'

const app = new App(controllers, Number(process.env.PORT))

app.listen()

export default app