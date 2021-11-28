import "./Dropdown.css"
import {CSSProperties, useState} from "react"
import ExpandArrow from "../../assets/svg/expand-arrow.svg"
import {System} from "../../utils/System"

interface DropdownProps {
    label?: string
    items: string[]
    style?: CSSProperties
    onChange?: (newValue: string, oldValue: string) => void
}

export const Dropdown = (props: DropdownProps) => {
    const [open, setOpen] = useState<boolean>(false)
    const [value, setValue] = useState<string>('All')

    return (
        <div className="dropdown" style={props.style}>
            <div className="label-container">
                <span>{props.label || ''}</span>
            </div>
            <div className="input-container" onClick={() => setOpen(!open)}>
                <input type="text" value={value} readOnly style={open ? { borderBottom: 'none', borderRadius: '.25em 0 0 0'} : {}} />
                <div className="arrow-container" style={open ? { borderBottom: 'none', borderRadius: '0 .25em 0 0'} : {}}>
                    <img className={`${open ? 'arrow-reversed' : ''}`} src={ExpandArrow} alt="Expand arrow" />
                </div>
            </div>
            <div className={`list ${open ? 'list-open' : ''}`}>
                {
                    ['All', ...props.items].map(item =>
                        <button
                            className="list-item"
                            key={System.uid}
                            onClick={() => {
                                const oldValue = value
                                setValue(item)
                                setOpen(false)
                                props.onChange && props.onChange(item, oldValue)
                            }}
                        >
                            {item}
                        </button>
                    )
                }
            </div>
        </div>
    )
}