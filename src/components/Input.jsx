import React from 'react'
import styled from 'styled-components'
export const ErrorMessage = styled.p`
    color: red;
    white-space: nowrap;
`


export default function Input({ label, required, placeholder, error, onChange }) {
    return (
        <label>
            <p>{label}
                {required && <span>*</span>}
            </p>
            <div className="input-group" style={{ width: '100%' }} >
                <input style={{ width: '100%' }} onChange={onChange} type="text" placeholder={placeholder} />
                {error && <ErrorMessage>{error}</ErrorMessage>}
            </div>
        </label>
    )
}
