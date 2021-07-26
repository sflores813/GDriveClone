import { Button, Modal, Form } from 'react-bootstrap'
import React, {useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons"
import { database } from '../../firebase'
import { useAuth } from '../../contexts/AuthContext'
import { ROOT_FOLDER } from '../../hooks/useFolder'




export default function AddFolderButton({ currentFolder }) {
    const [open, setOpen] = useState(false)
    const [name, setName] = useState("")
    const { currentUser } = useAuth()

    function openModal() {
        setOpen(true)
    }
     
    function closeModal() {
        setOpen(false)
    }

    function handleSubmit (e) {
        e.preventDefault()

       if (currentFolder ==null) return 
       
       const path =[...currentFolder.path]
       if (currentFolder !== ROOT_FOLDER) {
           path.push({ name: currentFolder.name, id:currentFolder.id })
       }
       
       // Creates folder in the database
       
        database.folders.add({
            name: name,
            parentId: currentFolder.id,
            userId: currentUser.uid,
            path: path,
            createdAt: database.getCurrentTimestamp(),
        })
        setName("")
        closeModal()

    }

    return (
        <>
        {/* sets up the folder button */}
        <Button onClick={openModal} className="mt-3" variant="outline-success">
            <FontAwesomeIcon icon={faFolderPlus} />
        </Button>
        {/* brings up add folder modal*/}
        <Modal show={open} onHide={closeModal}>
            <Form onSubmit={handleSubmit}>
                <Modal.Body>
                    <Form.Group>
                      <Form.Label>Folder Name</Form.Label>
                      <Form.Control 
                      type="text"
                      required
                      value={name}
                      onChange={e => setName(e.target.value)}
                      />  
                    </Form.Group>
                </Modal.Body>
                {/* close button */}
                <Modal.Footer>
                   <Button variant="secondary" onClick={closeModal}>
                       Close
                       </Button> 
                       {/* add folder button */}
                       <Button variant="success" type="submit">
                           Add Folder
                       </Button>
                </Modal.Footer>
            </Form>
        </Modal>
        </>
    )
}
