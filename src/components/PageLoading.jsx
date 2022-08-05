import { CircularProgress } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const LoadingRoot = styled.div`
    min-height: 100vh;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
`

export default function PageLoading() {
    return (
        <LoadingRoot>
            <CircularProgress />
        </LoadingRoot>
    )
}
