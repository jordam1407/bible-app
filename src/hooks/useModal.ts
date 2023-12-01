import { modalStore } from '@src/store/modal.atoms'
import { PrimitiveAtom, useAtom } from 'jotai'
import { useCallback } from 'react'

export function useModal(atom: PrimitiveAtom<boolean> = modalStore.openedAtom) {
    const [isOpened, setOpened] = useAtom(atom)

    const toggle = useCallback(() => {
        setOpened((old) => !old)
    }, [setOpened])

    const close = useCallback(() => {
        setOpened(false)
    }, [setOpened])

    const open = useCallback(() => {
        setOpened(true)
    }, [setOpened])

    return { isOpened, toggle, close, open }
}
