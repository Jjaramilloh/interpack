import { ToastContainer, toast } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';

const ExampleComponent = () => {
  
  const handleSave = (e) => {
    // Simulación de guardado
    e.preventDefault();

    toast.info('hola1');
    toast.success('Guardado correctamente!', { autoClose: 5000 });
    toast.info('hola2', { autoClose: 2000 });

    setTimeout(() => {
        toast.info('hola3', { autoClose: 2000 });
    }, 8000);

    toast.info('hola4', { autoClose: 2000 });
  }

  return (
    <div>
        <form>

      <button onClick={handleSave}>Guardar</button>
        <ToastContainer />
        </form>     
    </div>
  );
}
export default ExampleComponent