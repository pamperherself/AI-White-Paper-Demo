import Header from './components/Header';
import LayoutShell from './components/LayoutShell';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E8F4FF] via-white to-[#E0F2FF] text-[#0F172A]">
      <Header />
      <LayoutShell />
    </div>
  );
}

export default App;
