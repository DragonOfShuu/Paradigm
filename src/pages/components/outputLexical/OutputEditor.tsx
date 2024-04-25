/**
 * We will be utilizing lexical. Look into the "serialization"
 * and "deserialization." Just like magical, we can use
 * percent signs to determine a placeholder: %pl.manager%
 * 
 * Editor: https://lexical.dev/docs/intro
 */

// import {$getRoot, $getSelection} from 'lexical';
// import {useEffect} from 'react';

import {LexicalComposer} from '@lexical/react/LexicalComposer';
import {RichTextPlugin} from '@lexical/react/LexicalRichTextPlugin';
import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import ToolbarPlugin from '../../../globalLexical/plugins/ToolbarPlugin/Index';

import UpdateHotkeyPlugin from '../../../globalLexical/plugins/UpdateHotkeyPlugin/Index';
import PlaceholderPlugin from '../../../globalLexical/plugins/PlaceholderPlugin/Index';
import PlaceholderNode from '../../../globalLexical/nodes/PlaceholderNode';
import { theme } from '@/globalLexical/GlobalLexicalSettings';
import DevConsole from '@/development/DevConsole';

// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.
function onError(error: Error) {
    DevConsole.error(error);
}

type Props = {
    className?: string
}

function OutputEditor(props: Props) {
    const initialConfig = {
        namespace: 'OutputEditor',
        nodes: [PlaceholderNode],
        theme,
        onError,
    };

    return (
        <LexicalComposer initialConfig={initialConfig}>
            <div className={`${props.className}`}>
                <div className={`size-full flex flex-col items-stretch`}>
                    <ToolbarPlugin />
                    <RichTextPlugin
                        contentEditable={<ContentEditable className={'h-full max-h-full rounded-lg border-2 border-fuchsia-400 focus:outline-fuchsia-500 outline-2 p-2'} />}
                        placeholder={<></>}
                        ErrorBoundary={LexicalErrorBoundary} />

                    <HistoryPlugin />
                    <UpdateHotkeyPlugin />
                    <PlaceholderPlugin />
                </div>
            </div>
        </LexicalComposer>
    );
}

export default OutputEditor