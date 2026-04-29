import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Modal from './Components/Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  function openModal(e) {
    setIsModalOpen(true);
}

function closeModal() {
    setIsModalOpen(false);
}
  return (
    <div>
      <h1>Приложение с модальным окном</h1>
      <button onClick={openModal}>Открыть</button>
      {isModalOpen && (<Modal onClose={closeModal}><p>разразраз</p></Modal>)}
    </div>
  )
}

export default App;
