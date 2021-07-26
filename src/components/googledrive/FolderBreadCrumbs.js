import React from 'react'
import { Breadcrumb } from 'react-bootstrap'

export default function FolderBreadCrumbs({ currentFolder }) {
    return (
        // loop between all folders that are before our current folder, and render out breadcrumb
        <Breadcrumb className="flex-grow-1"  listProps={{ className:"bg-white pl-0 m-0"}}>
        {currentFolder && (
            <Breadcrumb.Item className="text-truncate d-inline-block"  style={{ maxWidth: "200px" }} active>
            {currentFolder.name}
            </Breadcrumb.Item>
        )}
        </Breadcrumb>
    )
}
