import logo from './10logo.jpg';
import pic from './10a.png';
import React, { useContext,useState, useRef } from "react";
import { MdMoney } from 'react-icons/md'; 
import { AiFillCloseCircle } from 'react-icons/ai'
import TraineeRequest from './pages/TraineeRequest';
import Transaction from './pages/Transaction';

import "./modal.css";
// import TransactionContext from './context/TransactionContext';

// const { connect } = useContext(TransactionContext);
function connect() {
  AlgoSigner.connect()
  .then((d) => {
    alert(JSON.stringify("Connected Successfully!", null, 2));
  })
  .catch((e) => {
    console.error(e);
    alert(JSON.stringify(e, null, 2));
  })
  .finally(() => {
     console.log('summer');
  });
}

function accounts() { 
  AlgoSigner.accounts({
    ledger: 'TestNet'
  })
  .then((d) => {
    const arr = JSON.stringify(d);
    alert(arr);
    // const account = arr.find(obj => {
    //   return obj.address;
    // });
    // this.setCurrentAccount(arr);
  })
  .catch((e) => {
    console.error(e);
   })
  .finally(() => {
  });
}

function Trainee() {
  // const { connect } = useContext(TransactionContext);

    const home = useRef(null);
    const request = useRef(null);
    const transaction = useRef(null);
    

    const scrollToSection = (elementRef) => {
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: 'smooth'
      })
    }

    const [modal, setModal] = useState(false);
    const toggleModal = () => {
      setModal(!modal);
    };

    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }

    return (
      <>
      <nav className='fixed top-0 right-0 z-10'>
            <ul className='flex justify-end my-4'>
                <li onClick={()=> scrollToSection(home)}  className="text-white ml-8 hover:bg-red-500 hover:filter hover:brightness-110 hover:transition hover:ease-in-out cursor-pointer rounded px-5 py-2">
                   Home
                </li>
                <li onClick={()=> scrollToSection(request)} className='text-white ml-8 hover:bg-red-500 hover:filter hover:brightness-110 hover:transition hover:ease-in-out cursor-pointer rounded px-5 py-2'>
                   Request
                </li>
                <li onClick={()=> scrollToSection(transaction)} className='text-white ml-8 hover:bg-red-500 hover:filter hover:brightness-110 hover:transition hover:ease-in-out cursor-pointer rounded px-5 py-2'>
                    Transaction
                </li>
            </ul>
        </nav>
       
      <div ref={home} className="mt-32 flex flex-row flex-wrap gap-52 justify-center text-white">
      <div>
      
      <div className='mr-96 mb-10 flex gap-5 flex-row-reverse'>
      <h1 class Name="text-3xl">
        10academy
      </h1><span><img src={logo} alt="" height={20} width={70} /></span>
      </div>
     
      <div>
      <div className='mb-10'>
        <p>10 Academy identifies, trains and enables exceptionally talented young Africans <br></br> to have an outsized impact on the world.</p>
      </div>

      <div><img src={pic} alt="" height={10} width={490} /></div>
      <div className='mt-10'>
        <a href="" onClick={connect} className='text-md bg-red-600 p-4 rounded-full text-white hover:filter hover:brightness-110'>Connect Wallet</a>
      </div>
      </div>
      
      </div>

      <div className="mt-14">
        <div className='bg-gradient-to-r from-red-600 via-blue-900 to-red-600 h-60 w-72 p-2 rounded-sm relative'>
          <div><MdMoney size="40px" /></div>
          <div className='flex flex-col justify-center text-center mt-8 text-xl'>
          <h1>Amount: 5 Algod</h1>
          <div><p>Algorand</p></div>
          </div>
          
          <div className='absolute mt-12'>
            <button className='bg-gradient-to-l from-blue-600 via-gray-900 to-blue-600 p-2 text-white rounded-full hover:filer hover:brightness-110' onClick={accounts}>Get Public key</button>
          </div>
          {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2 class="text-gray-900 text-center">
            RBAWCKKRQQSP5HVTSSSZSMWZZFKREGYMXIJ6PDERWGVTCSZCHAJZB76JKY
            </h2>
            <button className="close-modal" onClick={toggleModal}>
              <AiFillCloseCircle size='28px'className="text-gray-900"/>
            </button>
          </div>
        </div>
      )}
        </div>        
      </div>
      </div>
      
      <div className='flex flex-col flex-wrap mx-20 gap-20'>
      <div ref={request}>
      <TraineeRequest />
      </div>

      <div ref={transaction}>
        <Transaction />
      </div>
      </div>
      </>
    )
  }
  
  export default Trainee