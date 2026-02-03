import './App.css'
import PageLayout from './components/layout/PageLayout'
import AppRoutes from './routes/AppRoutes'

function App() {

  return (
    <>
      <div>
        <PageLayout>
          <AppRoutes />
        </PageLayout>
      </div>
    </>
  )
}

export default App
