import React from 'react'
import { Html, Body, Container, Text, Link, Preview} from '@react-email/components'


const WelcomeTemplate = ( {name}: {name: string}) => {
  return (
    <Html>
      <Preview>Welcome to our service!</Preview>
      <Body style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
        <Container style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px' }}>
          <Text style={{ fontSize: '24px', fontWeight: 'bold', color: '#333' }}>Welcome {name}!</Text>
          <Text style={{ fontSize: '16px', color: '#555' }}>
            Thank you for joining us. We are excited to have you on board!
          </Text>
          <Text style={{ fontSize: '16px', color: '#555' }}>
            To get started, please visit our website and explore the features we offer.
          </Text>
          <Link href="https://example.com" style={{ color: '#1a73e8', textDecoration: 'none' }}>Visit our website</Link>
        </Container>
      </Body>
    </Html>
  )
}

export default WelcomeTemplate