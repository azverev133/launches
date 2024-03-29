import "./Dropdown.css"
import {CSSProperties, useEffect, useRef, useState} from "react"
import ExpandArrow from "../../assets/svg/expand-arrow.svg"
import {ICustomMap} from "../../types/entities"

interface DropdownProps {
    label?: string
    items: ICustomMap[]
    style?: CSSProperties
    onChange?: (newValue: ICustomMap, oldValue: { id: string, value: string }) => void
}

export const Dropdown = (props: DropdownProps) => {
    const allTemplate = { id: '0', value: 'All' }

    const [open, setOpen] = useState<boolean>(false)
    const [selectedItem, setSelectedItem] = useState<ICustomMap>(allTemplate)

    const dropdownRef = useRef<HTMLDivElement>(null)
    const listRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (listRef.current && dropdownRef.current) {
            listRef.current.style.width = dropdownRef.current.offsetWidth - 2 + 'px'
            listRef.current.style.top = dropdownRef.current.getBoundingClientRect().bottom - 1 + 'px'
        }
    }, [])

    return (
        <div ref={dropdownRef} className={`dropdown ${open ? 'dropdown-open': ''}`} style={props.style}>
            <div className="label-container">
                <span>{props.label || ''}</span>
            </div>
            <div className="input-container" onClick={() => setOpen(!open)}>
                <input type="text" value={selectedItem.value} readOnly />
                <div className="arrow-container">
                    <img className={`${open ? 'arrow-reversed' : ''}`} src={ExpandArrow} alt="Expand arrow" />
                </div>
            </div>
            <div ref={listRef} className={`list ${open ? 'list-open' : ''}`}>
                {
                    [allTemplate, ...[...new Map(props.items.map(item => [item.id, item]))].map(item => item[1])].map(item =>
                        <button
                            className="list-item"
                            key={item.id}
                            onClick={() => {
                                const oldValue = selectedItem
                                setSelectedItem(item)
                                setOpen(false)
                                console.log({selectedItem, oldValue, item})
                                props.onChange && props.onChange(item, oldValue)
                            }}
                        >
                            {item.value}
                        </button>
                    )
                }
            </div>
        </div>
    )
}