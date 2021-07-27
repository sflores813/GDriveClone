import React from 'react'
import { Container } from 'react-bootstrap'
import { useFolder, } from '../../hooks/useFolder'
import AddFolderButton from './AddFolderButton'
import AddFileButton from './AddFileButton'
import Folder from './Folder' 
import { useParams, useLocation } from 'react-router-dom'
import FolderBreadCrumbs from './FolderBreadCrumbs'

import Navbar from './Navbar'

export default function Dashboard() {
    const { folderId } = useParams()
    const { state = {} } = useLocation()
    const { folder, childFolders} = useFolder(folderId, state.folder)
    
    
    return <>
    <Navbar />
    <Container fluid>
        {/* setting up breadcrumbs */}
        <div className="d-flex align-items-center">
            <FolderBreadCrumbs currentFolder={folder} />
            <AddFolderButton currentFolder={folder} />
            <AddFileButton currentFolder={folder} />

        </div>
        {childFolders.length > 0 && (
            <div className="d-flex flex-wrap">
                {childFolders.map(childFolder => (
                    <div 
                    key={childFolder.id} 
                    style={{ maxWidth: '250px' }}
                    className='p-2'
                    >
                    <Folder folder={childFolder} />
                    </div>
                ))}
            </div>
        )}
    </Container>

        
    </>
}
