// import React from 'react'
import { HotkeyAction, useHotkeyContext, useHotkeyDispatchContext } from "../DataStateContext"

type Props = {
    className: string
}

const AbbrEditor = (props: Props) => {
    const hotkeyData = useHotkeyContext()
    const hotkeyDataDispatch = useHotkeyDispatchContext()

    const setWithEdits = (action: HotkeyAction) => {
        if (!hotkeyData.hasEdits) {
            hotkeyDataDispatch({type: 'changeEdits', hasEdits: true});
        }
        hotkeyDataDispatch(action)
    }

    if (hotkeyData.currentHotkeyEdit===undefined) 
        return (
            <div className={`${props.className} w-full h-full flex justify-center items-center`}>
                <h1 className={`text-8xl opacity-10 select-none font-serif`}>
                    EDITOR
                </h1>
            </div> 
        )

    return (
        <div className={`${props.className} flex flex-col gap-5 w-full h-full p-20`}>
            <input 
                type={`text`} 
                className={`w-full h-12 text-5xl border-fuchsia-500 rounded-lg text-fuchsia-700 border-b-2 bg-transparent hover:bg-`}
                placeholder="Name" 
                onChange={(e)=> setWithEdits({type: 'updateCurrentEdit', hotkey: {name: e.target.value}})}
                value={hotkeyData.currentHotkeyEdit.name} /> 
            <div className={`grow`}>

            </div>
            <div className={`flex flex-row-reverse gap-2`}>
                <button className={`py-4`}>
                    Save
                </button>
                <button className={`py-4`}>
                    Cancel
                </button>
                {/* cancel and save buttons */}
                {/* Cancel: Cancels edits by getting previous id information
                and placing it in the textboxes. If the previous id information
                doesn't exist, it will just remove the "currentEdits" entirely */}
            </div>
        </div>
    )
}

export default AbbrEditor