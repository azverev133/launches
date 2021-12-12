import "./Dropdown.css"
import {CSSProperties, useState} from "react"
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

    return (
        <div className="dropdown" style={props.style}>
            <div className="label-container">
                <span>{props.label || ''}</span>
            </div>
            <div className="input-container" onClick={() => setOpen(!open)}>
                <input type="text" value={selectedItem.value} readOnly style={open ? { borderBottom: 'none', borderRadius: '.25em 0 0 0'} : {}} />
                <div className="arrow-container" style={open ? { borderBottom: 'none', borderRadius: '0 .25em 0 0'} : {}}>
                    <img className={`${open ? 'arrow-reversed' : ''}`} src={ExpandArrow} alt="Expand arrow" />
                </div>
            </div>
            <div className={`list ${open ? 'list-open' : ''}`}>
                {
                    [allTemplate, ...props.items].map(item =>
                        <button
                            className="list-item"
                            key={item.id}
                            onClick={() => {
                                const oldValue = selectedItem
                                setSelectedItem(item)
                                setOpen(false)
                                props.onChange && props.onChange(selectedItem, oldValue)
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