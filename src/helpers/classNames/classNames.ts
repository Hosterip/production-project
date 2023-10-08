type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods: Mods, additional: string[]): string {
    return [
        cls,
        ...additional,
        ...Object.entries(mods)
            .filter(([entries, value]) => Boolean(value))
            .map(item => item[0])
    ].join(' ')
}

classNames('remove-btn', {hovered: true, list: false}, ['green'])