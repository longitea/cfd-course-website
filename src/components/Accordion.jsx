import classNames from 'classnames'
import React, { useState } from 'react'
import { useContext } from 'react'
import { createContext } from 'react'
import styled from 'styled-components'

const ContentWrap = styled.div`
    display: block !important;
`

export default function Accordion({ date, title, children, isOpen, onClick, index }) {
    const [_isOpen, setIsOpen] = useState(false)
    const { activeContent, onActive } = useContext(Context)

    const active = isOpen || (activeContent === index) || _isOpen
    console.log(active);
    const _onClick = onClick || (() => {
        if (typeof index !== 'undefined') {
            onActive(index)
        } else {
            setIsOpen(!_isOpen)
        }
    })
    return (
        <div className={classNames('accordion', { active })}>
            <div className="accordion__title" onClick={_onClick}>
                <div className="date">Ngày {date}</div>
                <h3>{title}</h3>
            </div>
            {
                active && <ContentWrap className="content">{children}</ContentWrap>
            }

        </div>
    )
}

const Context = createContext({ activeContent: -1 })

Accordion.Group = ({ children }) => {
    const [activeContent, setActiveContent] = useState()
    const onActive = (i) => {
        setActiveContent(i === activeContent ? -1 : i)
    }

    return <Context.Provider value={{ activeContent, onActive }}>
        {
            React.Children.map(children, (child, i) => React.cloneElement(child, { index: i }))
        }
    </Context.Provider>
}
