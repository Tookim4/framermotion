import React, {useState} from "react";
import {Button, Modal} from './styled'
import { motion, AnimatePresence } from "framer-motion";

const App= () => {
  const [modal, showModal] = useState(false);


  const setmodal = {
    hidden : {
      opacity: 0,
    },
    view : {
      // y: '20%',
      opacity: 1,
      transition: {
        duration: 1,
      }
    }
  }

  return (
    <div style={{backgroundColor: '#000', height: '100vh', margin: '0'}} >
        <h3 style={{margin: '0', color: '#fff', padding: '30px', textAlign: 'center'}}>Kimutai Too</h3>
        <hr style={{width: '80%', textAlign: 'center'}}/>

        <AnimatePresence>
      
          { modal && (
            <Modal as={motion.div} variants={setmodal} initial='hidden' animate='view' onClick={()=> showModal(false)}>
            <h3>Message sent!</h3>
            <p>I will respond through your email... <br/> Kimutai Too. </p>
          </Modal>)}
        </AnimatePresence>

       

      <Button as={motion.button} onClick={()=> showModal(true)}>Say Hi</Button>
        
    </div>
  );
}

export default App;
