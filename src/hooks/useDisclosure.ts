import { useCallback, useState } from 'react'

type useDisclosureReturn = [
    boolean,
    {
        readonly open: () => void
        readonly close: () => void
        readonly toggle: () => void
    },
]

function useDisclosure(initialState = false): useDisclosureReturn {
    const [isOpened, setOpened] = useState<boolean>(() => initialState)

    const toggle = useCallback(() => {
        setOpened((old) => !old)
    }, [setOpened])

    const close = useCallback(() => {
        setOpened(false)
    }, [setOpened])

    const open = useCallback(() => {
        setOpened(true)
    }, [setOpened])

    return [isOpened, { open, close, toggle }]
}

export default useDisclosure
