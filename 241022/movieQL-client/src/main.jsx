import { createRoot } from 'react-dom/client'
import { ApolloProvider } from '@apollo/client'
import client from './clinet.js'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
)
