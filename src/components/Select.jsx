import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ErrorMessage } from './Input'
const SelectSub = styled.div`
    &.active{
        display: block !important;
    }
`

export default function Select({ label, options, onChange, error, placeholder }) {
    const [isOpen, setIsOpen] = useState(false)
    const [value, setValue] = useState(placeholder)

    useEffect(() => {
        const click = () => {
            setIsOpen(false)
        }
        window.addEventListener('click', click)
        return () => {
            window.removeEventListener('click', click)
        }
    }, [])

    const onClick = (ev) => {
        ev.stopPropagation();
        setIsOpen(true)
    }

    const onSelect = (ev, value) => {
        ev.preventDefault()
        setValue(value)
        onChange?.(value)
    }
    return (
        <label>
            <p>{label}</p>
            <div className="input-group" style={{width: '100%'}}>
                <div className="select">
                    <div className="head" onClick={onClick}>{value}</div>
                    <SelectSub className={`sub ${isOpen ? 'active' : ''}`}>
                        {
                            options.map(e => <a key={e} onClick={(ev) => onSelect(ev, e)} href="#">{e}</a>)
                        }

                    </SelectSub>
                </div>
                {error && <ErrorMessage>{error}</ErrorMessage>}
            </div>
        </label>
    )
}
