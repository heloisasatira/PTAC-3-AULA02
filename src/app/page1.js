import Map from './components/Map';

export default function Local({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
        <Map/>
      </body>
    </html>
  )
}