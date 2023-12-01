import { useModal } from '@src/hooks/useModal'
import { Sheet } from '@tamagui/sheet'
import { useState } from 'react'

import { SheetModalProps } from './SheetModal.types'

export default function SheetModal({ children, initialPosition, atom, modal, fit }: SheetModalProps) {
    const { isOpened, close } = useModal(atom)
    const [position, setPosition] = useState(0)

    return (
        <Sheet
            dismissOnOverlayPress
            forceRemoveScrollEnabled={isOpened}
            modal={modal}
            open={isOpened}
            onOpenChange={() => close()}
            snapPoints={fit ? undefined : [initialPosition ? initialPosition : 80]}
            snapPointsMode={fit ? 'fit' : 'percent'}
            dismissOnSnapToBottom
            position={position}
            onPositionChange={setPosition}
            zIndex={100_000}
            animation="bouncy">
            <Sheet.Overlay bg="$backdrop" />
            <Sheet.Handle bg="white" />

            <Sheet.Frame flex={1} padding="$4" backgroundColor="white">
                {children}
            </Sheet.Frame>
        </Sheet>
    )
}
